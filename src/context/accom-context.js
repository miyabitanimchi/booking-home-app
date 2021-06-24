import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AccomsContext = createContext();

// list
const options = {
  method: "GET",
  url: "https://hotels4.p.rapidapi.com/properties/list",
  params: {
    adults1: "1",
    pageNumber: "1",
    destinationId: "169712",
    pageSize: "25",
    checkOut: "2020-01-15",
    checkIn: "2020-01-08",
    sortOrder: "PRICE",
    locale: "en_CA",
    currency: "CAD",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "hotels4.p.rapidapi.com",
  },
};

// // meta data
// const options = {
//   method: "GET",
//   url: "https://hotels4.p.rapidapi.com/get-meta-data",
//   headers: {
//     "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY,
//     "x-rapidapi-host": "hotels4.p.rapidapi.com",
//   },
// };

// search
// const options = {
//   method: "GET",
//   url: "https://hotels4.p.rapidapi.com/locations/search",
//   params: { query: "vancouver", locale: "en_CA" },
//   headers: {
//     "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//     "x-rapidapi-host": "hotels4.p.rapidapi.com",
//   },
// };

const AccomProvider = ({ children }) => {
  const [accoms, setAccoms] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await axios.request(options);
      console.log(res.data.data.body);
      // console.log(res);

      setAccoms(res.data.data.body);
    };
    fetchAPI();
  }, []);

  return (
    <AccomsContext.Provider value={{ accoms }}>
      {children}
    </AccomsContext.Provider>
  );
};

const useAccomsContext = () => useContext(AccomsContext);

export { useAccomsContext, AccomProvider as default };
