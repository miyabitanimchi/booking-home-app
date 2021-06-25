import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";

const MainPage = () => {
  const {
    searchResult,
    dispatchSearchParams,
    locationTitle
  } = useAccomsContext();

  console.log(searchResult);
  console.log(dispatchSearchParams);
  console.log(locationTitle);
  // console.log(dispatchSearchParams)

  return (
    <>
      {searchResult && (
        <h3>{locationTitle}</h3>
        // <h1>hello</h1>
      )}
    </>
  );
};
export default MainPage;
