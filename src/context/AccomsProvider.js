import React, { useState, createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import searchParamsReducer from "../reducer/searchParamsReducer";

const AccomsContext = createContext();

const INITIAL_SEARCH_PARAMS = {
  adults1: "1",
  pageNumber: "1",
  destinationId: "169712",
  pageSize: "25",
  checkOut: "2021-07-12",
  checkIn: "2021-07-05",
  sortOrder: "BEST_SELLER",
  locale: "en_CA",
  currency: "CAD",
}

const AccomsProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, dispatchSearchParams] = useReducer(searchParamsReducer, INITIAL_SEARCH_PARAMS);
  const [cityName, setCityName] = useState(null);
  const [locationTitle, setlocationTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [isFirstFetch, setIsfirstFetch] = useState(true);

  useEffect(() => {
    const fetchSearchResult = async () => {
      if (searchParams) {
        setIsLoading(true);
        try {
          const searchOptions = {
            method: "GET",
            url: "https://hotels4.p.rapidapi.com/properties/list",
            params: searchParams,
            headers: {
              "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
              "x-rapidapi-host": "hotels4.p.rapidapi.com",
            },
          };
          const res = await axios.request(searchOptions);
          console.log(res.data.data);
          console.log("This is fetchSearchResult");
          setlocationTitle(res.data.data.body.header);
          setSearchResult(res.data.data.body.searchResults.results);
          setIsLoading(false);
          // setIsfirstFetch(false);
        } catch (err) {
          console.log(`Oops, error!: ${err}`)
        }
      }
    }
    // searchParams && fetchSearchResult();
    searchParams && fetchSearchResult();

  }, [searchParams]);

  // Not executed first time
  useEffect(() => {
    const fetchLocation = async () => {
      if (cityName) {
        try {
          const locationOptions = {
            method: 'GET',
            url: `https://hotels4.p.rapidapi.com/locations/search`,
            params: { query: cityName, locale: 'en_CA' },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
              'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            }
          }
          const locationRes = await axios.request(locationOptions);
          console.log(locationRes.data.suggestions);
          console.log("This is fetchLocation");

          dispatchSearchParams({
            type: 'SET_DESTINATION_ID',
            payload: locationRes.data.suggestions[0].entities[0].destinationId
          });
        } catch (err) {
          console.log(`Oops, error!: ${err}`)
        }
      }
    };
    fetchLocation();
  }, [cityName]);

  console.log(searchParams);

  return (
    <AccomsContext.Provider value={{
      searchResult,
      setCityName,
      dispatchSearchParams,
      locationTitle,
      isLoading,
    }}>
      {children}
    </AccomsContext.Provider>
  );
};

const useAccomsContext = () => useContext(AccomsContext);

export { useAccomsContext, AccomsProvider as default };
