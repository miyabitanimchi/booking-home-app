import React, { useState } from "react";
import { useAccomsContext } from "../../context/AccomsProvider"
import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";
import moment from 'moment';

const DATE_NOW = moment().format("YYYY-MM-DD");

// Edit as you like
const Header = () => {
  const {
    dispatchSearchParams,
    setCityName,
    searchParams,
  } = useAccomsContext();

  const [checkInDate, setCheckInDate] = useState(searchParams.checkIn);
  const [checkInDatePlus1, setCheckInDatePlus1] = useState(
    moment(checkInDate, "YYYY-MM-DD").add(1, 'd').format("YYYY-MM-DD")
  );
  const [checkOutDate, setCheckOutdate] = useState(searchParams.checkOut);
  const [numOfGuests, setNumOfGuests] = useState(searchParams.adults1);
  const [city, setCity] = useState("vancouver");
  const [isCitySet, setIsCitySet] = useState(false);
  console.log(checkInDatePlus1);

  const onSubmitCity = () => {
    setCityName(city);
    setIsCitySet(true);
  }

  const onSetCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckInDatePlus1(moment(date, "YYYY-MM-DD").add(1, 'd').format("YYYY-MM-DD"))
  }

  const onSubmitSearchInfo = () => {
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
                onChange={(e) => setCity(e.target.value.toLowerCase())}
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
                <input type="date" name="check-in" value={checkInDate} min={DATE_NOW} onChange={(e) => onSetCheckInDate(e.target.value)} />
              </div>
              <div className="display-column">
                <label htmlFor="date" className="label-font-size">Check out</label>
                <input type="date" name="check-out" value={checkOutDate} min={checkInDatePlus1} onChange={(e) => setCheckOutdate(e.target.value)} />
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
