/** @format */

import Wrapper from "../assets/wrappers/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaTimes, FaBars } from "react-icons/fa";

import logo from "../assets/images/17-oranges.png";
import whiteLogo from "../assets/images/17-oranges-white.png";
import { ReactComponent as Development } from "../assets/images/development.svg";

import { ReactComponent as Consultancy } from "../assets/images/consultancy.svg";
import { ReactComponent as Resources } from "../assets/images/resources.svg";
import { ReactComponent as Why17Oranges } from "../assets/images/badge.svg";
import { ReactComponent as Leadership } from "../assets/images/leadership.svg";
import { ReactComponent as CaseStudies } from "../assets/images/casestudy.svg";
import { LiaBlogSolid } from "react-icons/lia";

import Menu from "./Menu";
import Submenu from "./Submenu";

const Navbar = () => {
  const {
    toggleTheme,
    setToggleTheme,
    isSidebarOpen,
    toggleSidebar,
    isShowSubmenu,
    setIsShowSubmenu,
    toggleSubmenu,
    pageId,
    setPageId,
  } = useGlobalContext();

  const mouseEnter = (e) => {
    console.log(e.currentTarget);
  };

  const mouseleave = (e) => {
    console.log(e.currentTarget);
  };
  const handleMouseOver = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <Wrapper className="navbar-container">
      <div className="nav-center" onMouseOver={handleMouseOver}>
        <header>
          <Link to="/">
            <img
              src={toggleTheme ? whiteLogo : logo}
              alt="logo"
              className="logo"
            />
          </Link>
          <div className="toggle-menu-btn" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </header>
        {/* mobile links */}
        <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
          <button className="close-btn" type="button" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          {/* solutions */}
          <div className="sidebar-links-container">
            <h3>Solutions</h3>
            <div className="links">
              <NavLink
                className="link"
                to="/solutions/development"
                onClick={toggleSidebar}
              >
                <span>
                  <Development />
                </span>
                Development
              </NavLink>
              <NavLink
                className="link"
                to="/solutions/consultancy"
                onClick={toggleSidebar}
              >
                <span>
                  <Consultancy />
                </span>
                consultancy
              </NavLink>
              <NavLink
                className="link"
                to="/solutions/resourcing"
                onClick={toggleSidebar}
              >
                <span>
                  <Resources />
                </span>
                resourcing
              </NavLink>
            </div>
          </div>
          {/* end solutions */}
          {/* about */}
          <div className="sidebar-links-container">
            <h3>About</h3>
            <div className="links">
              <NavLink
                className="link"
                to="about/why-17-oranges"
                onClick={toggleSidebar}
              >
                <span>
                  <Why17Oranges />
                </span>
                Why 17 Oranges
              </NavLink>
              <NavLink
                className="link"
                to="about/leadership"
                onClick={toggleSidebar}
              >
                <span>
                  <Leadership />
                </span>
                leadership
              </NavLink>
              <NavLink
                className="link"
                to="about/case-studies"
                onClick={toggleSidebar}
              >
                <span>
                  <CaseStudies />
                </span>
                Case Studies
              </NavLink>
              <NavLink
                className="link"
                to="about/blog"
                onClick={toggleSidebar}
              >
                <span>
                  <LiaBlogSolid />
                </span>
                Blog
              </NavLink>
            </div>
          </div>
          {/* end about */}

          {/* footer */}
          <footer>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Sign in
            </NavLink>
            <NavLink to="/careers" onClick={toggleSidebar}>
              Careers
            </NavLink>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact Us
            </NavLink>
          </footer>
          {/* end footer */}
        </div>
        {/* end mobile links */}

        {/* desktop links */}
        <Menu />
        {/* end desktop links */}
      </div>
      <Submenu />
    </Wrapper>
  );
};

export default Navbar;
