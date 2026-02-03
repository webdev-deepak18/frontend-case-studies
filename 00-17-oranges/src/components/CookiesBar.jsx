/** @format */

import React, { useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/CookiesBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const CookiesBar = () => {
  // const {showCookies, setShowCookies} = useGlobalContext()
  const [showCookies, setShowCookies] = useState(null)
 useEffect(()=>{
  setShowCookies(true)
 }, [])
  return (
    <div>
      {showCookies && (
        <Wrapper>
          <div className="section-center cookies">
            We use cookies to ensure that you have the best experience on our
            website. If you continue to use this site we assume that you accept
            this.{" "}
            <Link to="/cookies-policy" target="_blank" className="link">
              Learn more
            </Link>
            <button
              type="button"
              className="btn cookies-btn"
              onClick={() => setShowCookies(false)}
            >
              OK
            </button>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default CookiesBar;
