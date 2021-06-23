import React from "react";
import { Link } from "react-router-dom";

// Edit as you like
const Header = () => (
  <>
    <h2>This is Header component</h2>
    {/* // example of app router... Import react router first with the command $ yarn add react-router-dom, and then import Link like above. */}
    <Link to="/">Main Page </Link>
    <Link to="/detail">Detail </Link>
    <Link to="/checkout">Checkout </Link>
  </>
);

export default Header;
