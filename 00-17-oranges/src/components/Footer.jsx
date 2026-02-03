/** @format */

import React from "react";
import { FooterWrapperMain } from "../assets/wrappers/Footer";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = () => {
  return (
    <>
      <FooterWrapperMain>
        <MobileFooter  />
        <DesktopFooter/>
      </FooterWrapperMain>
    </>
  );
};

export default Footer;
