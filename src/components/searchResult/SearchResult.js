import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import SearchResultItem from "./SearchResultItem";
import Loading from "../loading/Loading";
import { v4 as uuid } from "uuid";
import "./SearchResult.css";

const SearchResult = () => {
  const {
    searchResult,
    dispatchSearchParams,
    isLoading,
  } = useAccomsContext();

  const onChangeSortOrder = (sortOption) => {
    dispatchSearchParams({
      type: "CHANGE_SORT_ORDER",
      payload: sortOption
    });
  }

  return (
    (searchResult && !isLoading) ? (
      <main  >
        <section className="search-result-container" onChange={(e) => onChangeSortOrder(e.target.value)}>
          <div className="search-title-options-wrap">
            <h3 className="search-result-title">Search Result</h3>
            <select className="sort-options">
              <option value="BEST_SELLER">Best Seller</option>
              <option value="STAR_RATING_HIGHEST_FIRST">Star Rating Highest First</option>
              <option value="DISTANCE_FROM_LANDMARK">Distance From Landmark</option>
              <option value="GUEST_RATING">Guest Rating</option>
              <option value="PRICE_HIGHEST_FIRST">Price Highest First</option>
              <option value="PRICE">Price Lowest First</option>
            </select>
          </div>
          <div className="search-items-container">
            {searchResult.map((accom) => (
              <SearchResultItem key={uuid()} {...accom} />
            ))}
          </div>
        </section>
      </main>
    ) : (
        <main>
          <Loading />
        </main>
      )

  );
};
export default SearchResult;
