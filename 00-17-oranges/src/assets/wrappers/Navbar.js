/** @format */

import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Wrapper = styled.div`
  position: relative;
  /* background: var(--white);; */
  box-shadow: var(--shadow-2);
  position: fixed;
  top: 0;
  z-index: 9999;
  padding-bottom: 1rem;
 
  width: 100%;

  .nav-center {
    /* max-width: var(--max-width-1); */
    width: var(--view-width);
    margin: 0 auto;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-top: 1.5rem;
  }

  .logo {
    max-width: 130px;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    padding: 2rem;
    visibility: hidden;
    opacity: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: var(--transition);
  }

  .show-sidebar {
    visibility: visible;
    opacity: 1;
  }

  .nav-center header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .toggle-menu-btn {
    background-color: transparent;
    border: transparent;
    font-size: 1.8rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .toggle-menu-btn:hover {
    transform: scale(1.04);
    color: var(--primary-500);
  }

  .close-btn {
    border: transparent;
    background-color: transparent;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: var(--primary-600);
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .sidebar-links-container {
    margin-top: 2rem;
  }

  .link {
    display: grid;
    align-items: center;
    gap: .75rem;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    text-transform: capitalize;
    grid-template-columns: 20px 1fr;
  }

  .link:hover {
    font-weight: 600;
    color: var(--primary-500);
    transition: var(--transition);
  }

  .link span {
    max-width: 1.5rem;
  }

  .link svg {
    width: 100%;
    height: auto;
    fill: var(--primary-500);
  }

  .sidebar h3 {
    margin-bottom: 1.5rem;
  }

  .sidebar footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: fixed;
    bottom: 3rem;
  }

  .sidebar footer a:hover {
    color: var(--primary-500);
  }

  .nav-links {
    display: none;
  }

  .submenu{
    display: none;
  }

  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
    .toggle-menu-btn {
      display: none;
    }

    .submenu{
      display: block;
    }

    .nav-center {
      align-self: stretch;
    }
    /* navlinks */
    .nav-links {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-self: stretch;
    }
    .nav-link {
      /* border: 2px solid blue; */
      padding: 0.5rem 1rem;
      transition: var(--transition);
      cursor: pointer;
      font-size: 1rem;
      border: transparent;
      background: transparent;
      letter-spacing: var(--letterSpacing);
      transition: var(--transition);
      width: 130px;
      text-transform: capitalize;
    }

    .nav-link:hover {
      background: var(--primary-500);
      color: var(--white);
    }

    .nav-link-2 {
      /* border: 2px solid blue; */
      padding: 0.5rem 1rem;
      transition: var(--transition);
      cursor: pointer;
      font-size: 1rem;
      border: transparent;
      background: transparent;
      letter-spacing: var(--letterSpacing);
      transition: var(--transition);
      width: 130px;
      text-transform: capitalize;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;;
      padding: 1.5rem 1rem;
    }

    .nav-link-2:hover {
      background: var(--primary-500);
      color: var(--white);
    }



    .active-btn {
      background: var(--primary-500);
      color: var(--white);
      font-size: 1rem;
      width: 160px;
    }

    .active-btn:hover {
      background: var(--grey-700);
    }

    .submenu {
      margin: 0 auto;
      transition: var(--transition);
      position: relative;
      top: 1rem;

      /* left: 780px;
      transform: translateX(-50%); */
    }
    .content {
      background: var(--grey-50);
      box-shadow: var(--shadow-1);
      padding: 2rem;
      position: absolute;
      transition: var(--transition);
      border-radius: var(--borderRadius);
      transition: var(--transition);
    }

    .content:hover {
      box-shadow: var(--shadow-3);
    }

    .hide-submenu {
      display: none;
    }

    /* .submenu h4 {
      color: var(--primary-500);
      margin-bottom: 1.2rem;
    } */

    .submenu-links {
      display: grid;
      gap: 1rem;
    }

    .menu-item {
      display: grid;
      grid-template-columns: 25px 1fr;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 1px solid var(--grey-100);
      padding-bottom: 1rem;
      cursor: pointer;
    }

    .menu-item:last-child{
      border: none;
      padding-bottom:0;
    }

    .menu-item:hover {
      color: var(--primary-500);
    }

    .menu-item svg {
      width: 100%;
      height: auto;
      fill: var(--primary-500);
    }

    /* end navlinks */
  }
`;
export default Wrapper;
