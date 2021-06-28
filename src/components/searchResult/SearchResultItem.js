import React from "react";
import "./SearchResultItem.css"
import { Link } from "react-router-dom";


const SearchResultItem = (props) => {

  // {
  //   optimizedThumbUrls,
  //     name,
  //     neighbourhood,
  //     guestReviews,
  //     ratePlan
  // }


  return (
    <Link to={"/detail/" + props.id}>
      <div className="search-item-wrap">
        <img src={props.optimizedThumbUrls && props.optimizedThumbUrls.srpDesktop} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.neighbourhood}</p>
          <p className="review-badge">{props.guestReviews ? props.guestReviews.badge : "-"}</p> 
          <p>Rating: {props.guestReviews ? props.guestReviews.rating : "-"}</p>
          <p>Price: {props.ratePlan ? props.ratePlan.price.current : "-"}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchResultItem;