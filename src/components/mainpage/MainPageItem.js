import React from "react";
import "./MainPageItem.css";
import { Link } from "react-router-dom";

const MainPageItem = ({ optimizedThumbUrls, name, id }) => {

  return (
    <Link to={"/detail/" + id}>
      <div className="item-wrap">
        <img className="accom-img" src={optimizedThumbUrls && optimizedThumbUrls.srpDesktop} alt={name} />
        <h4 className='item-name'>{name}</h4>
      </div>
    </Link>
  )
}

export default MainPageItem;