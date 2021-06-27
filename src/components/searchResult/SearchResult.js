import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import SearchResultItem from "./SearchResultItem";
import "./SearchResult.css";

const SearchResult = () => {
  const {
    searchResult,
    dispatchSearchParams,
    locationTitle
  } = useAccomsContext();

  console.log(searchResult);
  console.log(dispatchSearchParams);

  return (
    searchResult && (
      <main  >
        <section className="search-result-container">
          <h2>Search Result:</h2>
          <div className="search-items-container">
            {searchResult.map((accom) => (
              <SearchResultItem key={accom.id} {...accom} />
            ))}
          </div>
        </section>
      </main>
    )

  );
};
export default SearchResult;
