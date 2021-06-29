import React, { useState } from "react";
import { useAccomsContext } from "../../context/AccomsProvider"
import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

// Edit as you like
const Header = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutdate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [city, setCity] = useState("");

  const {
    dispatchSearchParams,
    setCityName,
  } = useAccomsContext();

  const onSubmitSearchInfo = () => {
    console.log("hello");

    const itinerary = {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adult1: numOfGuests,
    }

    setCityName(city);

    dispatchSearchParams({
      type: "SET_ITINERARY",
      payload: itinerary,
    })
  }

  return (
    <>
      <div className='header-container'>
        {/* Logo - link to main page */}
        <div>
          <Link to="/" className='header-logo'>
            Airbnbish
        </Link>
        </div>
        <div className='header-search-container'>
          <input
            onChange={(e) => setCity(e.target.value)}
            className='header-search'
            type='search'
            placeholder='Search'
          />
          <div className='header-search-icon'>
            <Link to="/searchresult"><BiSearch onClick={() => onSubmitSearchInfo()} className='search-icon' /></Link>
          </div>
        </div>
        <input type="date" name="check-in" onChange={(e) => setCheckInDate(e.target.value)} />
        <input type="date" name="check-out" onChange={(e) => setCheckOutdate(e.target.value)} />
        <select onChange={(e) => setNumOfGuests(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div className='header-menu'>
          <Link to="/detail">Detail </Link>
          <Link to="/checkout">Checkout </Link>
          <CgProfile className='profile' />
        </div>
      </div>
    </>
  )
};

export default Header;
