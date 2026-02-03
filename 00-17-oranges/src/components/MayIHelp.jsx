/** @format */

import React from "react";
import styled from "styled-components";
import womanWithHeadphone from "../assets/images/woman-wearing-headphone.webp";

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  img {
    max-width: 80px;
  }
`;

const MayIHelp = () => {
  return (
    <Wrapper>
      <a href="">
        <img src={womanWithHeadphone} alt="May I help You" />
      </a>
    </Wrapper>
  );
};

export default MayIHelp;
