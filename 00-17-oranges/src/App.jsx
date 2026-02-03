/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Careers,
  CaseStudies,
  Consultancy,
  Contact,
  Development,
  Home,
  HomeLayout,
  Leadership,
  Resourcing,
  Why17Oranges,
  ErrorPage,
  CaseStudy01,
  CaseStudy03,
  CaseStudy04,
  BuccaneerCaseStudy,
  EBCCaseStudy,
  KloeberCaseStudy,
  KwandoCaseStudy,
  Cookies, 
  PrivacyPolicy,
  Bio,
  Blog01,
  Blog02,
  Blog03,
} from "./pages/index";
import Blog from "./pages/Blog";

import {loader as BioLoader} from './pages/Bio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "solutions/development",
        element: <Development />,
      },
      {
        path: "solutions/consultancy",
        element: <Consultancy />,
      },
      {
        path: "solutions/resourcing",
        element: <Resourcing />,
      },
      {
        path: "about/why-17-oranges",
        element: <Why17Oranges />,
      },
      {
        path: "about/leadership",
        element: <Leadership />,
      },
      {
        path: "about/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "about/blog",
        element: <Blog />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "about/case-studies/technology-resourcing",
        element: <CaseStudy01 />,
      },
      {
        path: "about/case-studies/data-management",
        element: <CaseStudy03 />,
      },
      {
        path: "about/case-studies/technology-consulting",
        element: <CaseStudy04 />,
      },
      {
        path: "about/case-studies/technology-enhancements",
        element: <BuccaneerCaseStudy />,
      },
      {
        path: "about/case-studies/tech-resourcing-support",
        element: <EBCCaseStudy />,
      },
      {
        path: "about/case-studies/technology-development",
        element: <KloeberCaseStudy />,
      },
      {
        path: "about/case-studies/app-development",
        element: <KwandoCaseStudy />,
      },
      {
        path: "/cookies-policy",
        element: <Cookies />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about/leadership/:id",
        element: <Bio />,
        loader: BioLoader,
      },
      {
        path: "/about/blog/recruitment-expo-2023",
        element:<Blog01/>,
      },
      {
        path: "/about/blog/looking-to-the-future",
        element:<Blog02/>,
      },
      {
        path: "/about/blog/stacks-of-potential",
        element:<Blog03/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
