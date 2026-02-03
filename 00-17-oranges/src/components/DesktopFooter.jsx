/** @format */

import React from "react";
import logo from "../assets/images/17-oranges.png";
import whiteLogo from "../assets/images/17-oranges-white.png";
import { useGlobalContext } from "../context";
import { ReactComponent as Tshirt } from "../assets/images/t-shirt.svg";

import { ReactComponent as LinkedIn } from "../assets/images/linkedin-fill.svg";
import { NavLink, Link } from "react-router-dom";

const year = new Date();

const DesktopFooter = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <div className="desktop-footer">
      <div className="logo-container">
        <Link to="/">
          <img
            src={toggleTheme ? whiteLogo : logo}
            alt="logo"
            className="logo"
          />
        </Link>

        <div>
          <div className="follow-container" style={{marginTop: '1rem'}}> 
            <Link
              to="https://www.linkedin.com/company/17-oranges/"
              target="_blank"
            >
              <LinkedIn />
              LinkedIn
            </Link>
            <Link
              to="https://www.redbubble.com/people/17Oranges/explore?asc=u&page=1&sortOrder=recent"
              target="_blank"
            >
              <Tshirt />
              Merchandise
            </Link>
          </div>

          <small className="copyright" style={{lineHeight: '1.5'}}>
            17 Oranges Limited © {year.getFullYear()} <br/> {' '}
            <Link className="link" to="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            | {' '}
            <Link className="link" to="/cookies-policy">
              Cookies Policy
            </Link>
          </small>
        </div>
      </div>
      <div className="menu">
        <div className="menu-container">
          <div className="menu">
            <h5>Solutions</h5>
            <div className="links">
              <NavLink className="link" to="/solutions/development">
                Development
              </NavLink>
              <NavLink className="link" to="/solutions/consultancy">
                Consultancy
              </NavLink>
              <NavLink className="link" to="/solutions/resourcing">
                Resourcing
              </NavLink>
            </div>
          </div>
          <div className="menu">
            <h5>About</h5>
            <div className="links">
              <NavLink className="link" to="/about/why-17-oranges">
                Why 17 Oranges
              </NavLink>
              <NavLink className="link" to="/about/leadership">
                Leadership
              </NavLink>
              <NavLink className="link" to="/about/case-studies">
                Case Studies
              </NavLink>
            </div>
          </div>
          <div className="menu">
            <h5></h5>
            <div className="links">
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="link" to="/careers">
                Careers
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
