/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Card";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardHorizontal = ({ id, title, desc, img, cardClass }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(!isHovering);
  const handleMouseLeave = () => setIsHovering(!isHovering);

  return (
    <Wrapper className={cardClass}>
      <div
        className={`card card-horizontal `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-img">
          <img
            src={img}
            alt={title}
            className={isHovering ? "img img-hover" : "img"}
          />
        </div>
        <div className={isHovering ? "overlay-hover" : "overlay"}></div>

        <div className="info">
          <h2 className="card-title">{title}</h2>
          <p className={isHovering ? "desc show-desc" : "desc"}>{desc}</p>
          <Link className="card-btn ">
            {isHovering ? "Case Study " : "More"}
            {isHovering ? <MdKeyboardArrowRight /> : <MdKeyboardArrowUp />}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardHorizontal;
