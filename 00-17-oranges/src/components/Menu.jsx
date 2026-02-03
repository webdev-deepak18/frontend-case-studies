/** @format */

import React, { useRef } from "react";
import { menuLinks } from "../utils/menuData";
import { useGlobalContext } from "../context";

const Menu = () => {
  const { setPageId, pageId, setLeftZero, setLeftOne } = useGlobalContext();
  const navLinkContainerZero = useRef();
  const navLinkContainerOne = useRef();
  const handleMouseEnter = (id) => {
    const { left: leftZero } =
      navLinkContainerZero.current.getBoundingClientRect();
    setLeftZero(leftZero);
    const { left: leftOne } =
      navLinkContainerOne.current.getBoundingClientRect();
    setLeftOne(leftOne);
   
    setPageId(id);
  };

  return (
    <div className="nav-links">
      {menuLinks.map((item, index) => {
        const { pageId, page } = item;
        return (
          <button
            type="button"
            className="nav-link"
            onMouseEnter={() => handleMouseEnter(pageId)}
            key={pageId}
            ref={
              (index === 0 && navLinkContainerZero) ||
              (index === 1 && navLinkContainerOne)
            }
          >
            {page}
          </button>
        );
      })}
      <a type="button" className="nav-link-2">
        sign in
      </a>
      <a type="button" href="/contact" className="nav-link-2 active-btn">
        Chat with us
      </a>
    </div>
  );
};

export default Menu;
