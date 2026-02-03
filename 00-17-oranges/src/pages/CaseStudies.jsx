/** @format */

import React from "react";

import { nanoid } from "nanoid";

import timeIsMoney from "../assets/images/time-is-money.webp";
import oneInOneOut from "../assets/images/one-in-one-out.webp";
import constructingValue from "../assets/images/constructing-value.webp";
import comingSoon from "../assets/images/coming-soon.webp";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import futuristicArt from "../assets/images/futuristic-digital-art-person-skyscrappers.webp";
import happiestWoman from "../assets/images/happiest-woman.webp";
import futuristicApp from "../assets/images/futuristic-app.webp";
import twoAustronauts from "../assets/images/two-austronauts.webp";
import Wrapper from "../assets/wrappers/CaseStudies";

import Cta from "../components/Cta";
import CardVertical from "../components/CardVertical";
import Animate from "../components/Animate";

const cardDataOne = {
  title: "Factoring: Time is Money",
  desc: "Global factoring business using a new portal to replace forms and faxes! What once took hours, now takes seconds. Happier client, happier colleagues.",
  img: timeIsMoney,
  cardClass: "card-one",
  id: nanoid(),
  link: "/about/case-studies/data-management",
};
const cardDataTwo = {
  title: "One In, One Out?",
  desc: "Consulting to a leading executive search company based in North America. Our client's ambitious transformation plans required so much more than a technology swap.",
  img: oneInOneOut,
  cardClass: "card-two",
  id: nanoid(),
  link: "/about/case-studies/technology-resourcing",
};

const cardDataThree = {
  title: "Constructing Value",
  desc: "A European client planning the migration of 20-year-old manual processes to an online portal. Sustainability, scale and efficiency in one simple system.",
  cardClass: "card-three",
  img: constructingValue,
  id: nanoid(),
  link: "/about/case-studies/technology-consulting",
};

const cardDataFour = {
  title: "New Tech Opportunities",
  desc: "Transforming a glazing manufacturer's Business Management Tool from a single point of failure into a competitive edge.",
  cardClass: "card-four",
  img: futuristicArt,
  id: nanoid(),
  link: "/about/case-studies/technology-development",
};
const cardDataFive = {
  title: "Exceeding Expectations",
  desc: "Helping a new adventure sports app take off by building a web app that went above and beyond.",
  cardClass: "card-five",
  img: happiestWoman,
  id: nanoid(),
  link: "/about/case-studies/technology-enhancements",
};
const cardDataSix = {
  title: "An App From Scratch",
  desc: "Working with a client from start to finish to build a high-quality social planning app.",
  cardClass: "card-six",
  img: futuristicApp,
  id: nanoid(),
  link: "/about/case-studies/app-development",
};
const cardDataSeven = {
  title: "Mentoring For Success",
  desc: "Delivering a talented development team the guidance it needed to overcome challenges in a fast-paced — and accelerating — environment.",
  cardClass: "card-seven",
  img: twoAustronauts,
  id: nanoid(),
  link: "/about/case-studies/tech-resourcing-support",
};

const cardDataEight = {
  title: "Coming soon!",
  desc: "",
  cardClass: "card-eight",
  img: comingSoon,
  id: nanoid(),
  link: "/",
};


const CaseStudies = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>
                Discover Our Transformative Work Through
                <span className="orange-bold"> CASE STUDIES</span>
              </h1>
            </Animate>
            <Animate>
              <h4>
                Dive into real-world examples showcasing how our innovative
                technology solutions have revolutionized businesses and
                empowered our clients to thrive.
              </h4>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-center">
          <div className="cards-container">
            <CardVertical {...cardDataOne} />
            <CardVertical {...cardDataTwo} />
            <CardVertical {...cardDataThree} />
            <CardVertical {...cardDataFour} />
            <CardVertical {...cardDataFive} />
            <CardVertical {...cardDataSix} />
            <CardVertical {...cardDataSeven} />
            <CardVertical {...cardDataEight} />
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default CaseStudies;
