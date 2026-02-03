/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Error";
import logo from "../assets/images/17-oranges.png";
import whiteLogo from "../assets/images/17-oranges-white.png";
import { Link } from "react-router-dom";
import sadAustronaut from "../assets/images/sad-austronaut.webp";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={sadAustronaut} alt="" className="bg-img" />
        <div className="overlay"></div>
        <div className="content">
          <h2>Oops - content not found...</h2>
          <Link to="/" className="btn error-btn">
            Home
          </Link>
        </div>
        <Link to="/">
          <img src={whiteLogo} alt="17 oranges" className="logo" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
