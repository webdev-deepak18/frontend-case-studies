/** @format */

import { ReactComponent as Development } from "../assets/images/development.svg";

import { ReactComponent as Consultancy } from "../assets/images/consultancy.svg";
import { ReactComponent as Resources } from "../assets/images/resources.svg";
import { ReactComponent as Why17Oranges } from "../assets/images/badge.svg";
import { ReactComponent as Leadership } from "../assets/images/leadership.svg";
import { ReactComponent as CaseStudies } from "../assets/images/casestudy.svg";
import { LiaBlogSolid } from "react-icons/lia";


import { nanoid } from "nanoid";

export const menuLinks = [
  {
    pageId: "solutions",
    page: "Solutions",
    links: [
      {
        id: nanoid(),
        label: "development",
        icon: <Development />,
        url: "/solutions/development",
      },
      {
        id: nanoid(),
        label: "consultancy",
        icon: <Consultancy />,
        url: "/solutions/consultancy",
      },
      {
        id: nanoid(),
        label: "resourcing",
        icon: <Resources />,
        url: "/solutions/resourcing",
      },
    ],
  },
  {
    pageId: "about",
    page: "about",
    links: [
      {
        id: nanoid(),
        label: "Why 17 Oranges",
        icon: <Why17Oranges />,
        url: "/about/why-17-oranges",
      },
      {
        id: nanoid(),
        label: "leadership",
        icon: <Leadership />,
        url: "/about/leadership",
      },
      {
        id: nanoid(),
        label: "Case Studies",
        icon: <CaseStudies />,
        url: "/about/case-studies",
      },
      {
        id: nanoid(),
        label: "Blog",
        icon: <LiaBlogSolid />,
        url: "/about/blog",
      },
    ],
  },
];
