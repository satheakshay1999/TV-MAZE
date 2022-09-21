import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
            <h3 className="nav__brand">
                <Link to='/' >
                    <i className="fas fa-video"> TV search</i>
                </Link>    
            </h3>
            <ul className="navlinks">
                <li className="links_links">
                  <Link to="/"> HOME</Link>
                </li>
                <li className="links_links">
                    <Link to='/AboutPage'>ABOUT</Link>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
