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
        <img className="search-item-img" src={props.optimizedThumbUrls && props.optimizedThumbUrls.srpDesktop} alt={props.name} />
        <div className="search-description-wrap">
          <h3 className="hotel-name">{props.name}</h3>
          <p>{props.neighbourhood}</p>
          <p className="review-badge">{props.guestReviews ? props.guestReviews.badge : "-"}</p>
          <p>Rating: {props.guestReviews ? props.guestReviews.rating : "-"}</p>
          <p className="search-price"><span className="price">{props.ratePlan ? props.ratePlan.price.current : "-"}</span> / per night</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchResultItem;