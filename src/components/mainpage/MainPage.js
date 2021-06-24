import React from "react";
import { useAccomsContext } from "../../context/accom-context";

const MainPage = () => {
  const accoms = useAccomsContext();

  return (
    <>
      {accoms.length !== 0 ? (
        <h3>{accoms.accoms.header}</h3>
      ) : (
        <h3>Failed to get data</h3>
      )}
    </>
  );
};
export default MainPage;
