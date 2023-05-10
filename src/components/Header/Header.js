import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo_main.png";
import search from "../../Assets/Search.svg";
import flag from "../../Assets/Australia.svg";
import downarrow from "../../Assets/Down.svg";
import logoBlack from "../../Assets/mobile_logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import mobileSearch from "../../Assets/mobile_search.png";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function toggleMenuClose() {
    setShowMenu(false);
  }

  console.log(props);
  return (
    <div className="header_section">
      <div className="logo">
        <NavLink to="/">
          <img className="logo_image" src={logo} alt="logo_image" />
        </NavLink>
      </div>
      <div className="mobile_logo">
        <NavLink to="/">
          <img className="logo_image" src={logoBlack} alt="logo_image" />
        </NavLink>
      </div>
      <nav className={showMenu ? "show" : "header_nav"}>
        <ul className="nav_headers">
          <NavLink to="/aboutus">
            <li className="nav_item" style={{ marginRight: "64px" }}>
              About us
            </li>
          </NavLink>
          <NavLink to="/ourthinking">
            <li className="nav_item" style={{ marginRight: "74px" }}>
              Our Thinking
            </li>
          </NavLink>
          <NavLink to="/ourapproach">
            <li className="nav_item" style={{ marginRight: "75px" }}>
              Our Approach
            </li>
          </NavLink>
          <NavLink to="/jointribe">
            <li
              className="nav_item"
              style={{
                marginRight: "45px",
              }}
            >
              Join the Tribe
            </li>
          </NavLink>
        </ul>
        <button className="close_menu" onClick={toggleMenuClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>

      <div className="profile_sec">
        <div
          className="nav_item"
          style={{
            marginRight: "25px",
            marginLeft: "37px",
          }}
        >
          Let’s Talk
        </div>
        <div className="search">
          <img className="search_icon" src={search} alt="search_icon" />
        </div>
        <div className="country_details">
          <img className="flag_icon" src={flag} alt="flag_image" />
          <div className="country_name">Aus</div>
          <img className="down_arrow" src={downarrow} alt="down_arrow" />
        </div>
      </div>
      <div className="hamburger_section">
        <img className="mobile_search" src={mobileSearch} alt="search_icon" />
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};
export default Header;
