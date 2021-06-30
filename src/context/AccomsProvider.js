import React, { useState, createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import searchParamsReducer from "../reducer/searchParamsReducer";
import moment from 'moment';

const AccomsContext = createContext();

const DATE_NOW = moment().format("YYYY-MM-DD");
// one week from today's date
const DEFAULT_DATE = moment(DATE_NOW, "YYYY-MM-DD").add(7, 'd').format("YYYY-MM-DD");
const ONE_WEEK_FROM_DEFAULT_DATE = moment(DEFAULT_DATE, "YYYY-MM-DD").add(7, 'd').format("YYYY-MM-DD");
console.log(ONE_WEEK_FROM_DEFAULT_DATE);

const INITIAL_SEARCH_PARAMS = {
  adults1: "1",
  pageNumber: "1",
  destinationId: "169712",
  pageSize: "25",
  checkIn: DEFAULT_DATE,
  checkOut: ONE_WEEK_FROM_DEFAULT_DATE,
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
      setIsLoading(true);
      if (searchParams) {
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
      setIsLoading(true);
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
      searchParams,
    }}>
      {children}
    </AccomsContext.Provider>
  );
};

const useAccomsContext = () => useContext(AccomsContext);

export { useAccomsContext, AccomsProvider as default };
