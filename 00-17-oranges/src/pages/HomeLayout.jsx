/** @format */

import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";

import { useGlobalContext } from "../context";
import ScrollToTop from '../components/ScrollToTop'

import {
  DarkTheme,
  BaseTheme,
  Container,
} from "../assets/wrappers/ToggleTheme";
import StickySidebar from "../components/StickySidebar";
import MayIHelp from "../components/MayIHelp";
import CookiesBar from "../components/CookiesBar";

const HomeLayout = () => {
  const { toggleTheme, setToggleTheme } = useGlobalContext();

  return (
    <ThemeProvider theme={toggleTheme ? DarkTheme : BaseTheme}>
      <Container>
        <ScrollToTop/>
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
        <StickySidebar />
        <MayIHelp />
        <Footer />
        <CookiesBar/>
      </Container>
    </ThemeProvider>
  );
};

export default HomeLayout;
