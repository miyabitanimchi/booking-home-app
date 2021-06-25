import React from "react";

import './Header.css';
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

// Edit as you like
const Header = () => (
  <>
    {/* <h2>This is Header component</h2> */}
    {/* // example of app router... Import react router first with the command $ yarn add react-router-dom, and then import Link like above. */}
    <div className='header-container'>
      {/* Logo - link to main page */}
      <div>
        <Link to="/" className='header-logo'>
          Airbnbish
        </Link>
      </div>
      <div className='header-search-container'>
        <input
          className='header-search'
          type='search'
          placeholder='Search'
        />
        <div className='header-search-icon'>
          <BiSearch className='search-icon' />
        </div>
      </div>
      <div className='header-menu'>
        <Link to="/detail">Detail </Link>
        <Link to="/checkout">Checkout </Link>
        <CgProfile className='profile' />
      </div>
    </div>
  </>
);

export default Header;
