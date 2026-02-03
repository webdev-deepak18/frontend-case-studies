/** @format */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const result = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [result.pathname]);
};

export default ScrollToTop;
