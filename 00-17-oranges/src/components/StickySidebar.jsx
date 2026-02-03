/** @format */

import React from "react";

import Wrapper from "../assets/wrappers/StickySidebar";
import { GoSmiley } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { showSmiley, setShowSmiley, toggleTheme, setToggleTheme } =
    useGlobalContext();

  const handleMouseEnter = () => {
    return;
    setShowSmiley(!showSmiley);
  };
  const handleMouseLeave = () => {
    return;
    setShowSmiley(!showSmiley);
  };

  return (
    <Wrapper>
      <Link
        to="/"
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showSmiley ? <GoSmiley /> : <RiHome2Line />}
      </Link>
      <div
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setToggleTheme(!toggleTheme)}
      >
        {toggleTheme ? <BsMoonStarsFill /> : <BsSun />}
      </div>
      <Link
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AiOutlineWhatsApp />
      </Link>
      <Link
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FiShare2 />
      </Link>
      <Link
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to="https://www.linkedin.com/company/17-oranges/"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </Link>
      {/* <Link
        className="sticy-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaRegLightbulb />
      </Link> */}
    </Wrapper>
  );
};

export default Sidebar;
