import React, { useState } from "react";
import { useAccomsContext } from "../../context/AccomsProvider"
import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

// Edit as you like
const Header = () => {
  const [checkInDate, setCheckInDate] = useState("2021-07-05");
  const [checkOutDate, setCheckOutdate] = useState("2021-07-12");
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [city, setCity] = useState("vancouver");
  const [isCitySet, setIsCitySet] = useState(false);

  const {
    dispatchSearchParams,
    setCityName,
  } = useAccomsContext();

  const onSubmitCity = () => {
    setCityName(city);
    setIsCitySet(true);
  }

  const onSubmitSearchInfo = () => {
    console.log("hello");

    const itinerary = {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults1: numOfGuests,
    }

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
          <Link to="/" className='header-logo' onClick={() => setIsCitySet(false)}>
            Airbnbish
          </Link>
        </div>
        {!isCitySet && (
          <>
            <div className='header-search-container'>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='header-search'
                type='search'
                placeholder='Search'
              />
              <Link to="/searchresult" className="submit-btn" onClick={() => onSubmitCity()}>Submit</Link>
            </div>

          </>
        )}
        {isCitySet && (
          <>
            <div className="destination">
              <p className="destination-name">{city.toUpperCase()}</p>
              <p className="change-destination" onClick={() => setIsCitySet(false)}> Change Destinatiion</p>
            </div>
            <div className="itinerary-wrap">
              <div className="display-column">
                <label htmlFor="date" className="label-font-size">Check in</label>
                <input type="date" name="check-in" onChange={(e) => setCheckInDate(e.target.value)} />
              </div>
              <div className="display-column">
                <label htmlFor="date" className="label-font-size">Check out</label>
                <input type="date" name="check-out" onChange={(e) => setCheckOutdate(e.target.value)} />
              </div>
              <div className="display-column">
                <label className="label-font-size">Guests</label>
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
              </div>
              <div className='header-search-icon'>
                <Link to="/searchresult"><BiSearch onClick={() => onSubmitSearchInfo()} className='search-icon' /></Link>
              </div>
            </div>
          </>
        )}
        <div className='header-menu'>
          {/* <Link to="/detail">Detail </Link>
          <Link to="/checkout">Checkout </Link> */}
          <CgProfile className='profile' />
        </div>
      </div>
    </>
  )
};

export default Header;
