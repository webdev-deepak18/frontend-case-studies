/** @format */

import React from "react";

import { nanoid } from "nanoid";

import recruitmentExpo from "../assets/images/recruitment-expo-2023.webp";
import lookingToTheFuture from "../assets/images/looking-to-the-future.webp";
import stacksOfPotential from "../assets/images/stacks-of-potential.webp";

import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";

import Wrapper from "../assets/wrappers/CaseStudies";

import Cta from "../components/Cta";
import CardVertical from "../components/CardVertical";
import Animate from "../components/Animate";

const cardDataOne = {
  title: "Recruitment Expo 2023",
  desc: "Such and amazing time connecting with new and old friends, hope you enjoyed it as much as we did…",
  img: recruitmentExpo,
  cardClass: "card-one",
  id: nanoid(),
  link: "/about/blog/recruitment-expo-2023",
  ctaText: "ReadMore",
};
const cardDataTwo = {
  title: "Looking to the future",
  desc: "Recruitment is always an evolving market and never more so than the last few years. Those who successfully adapted, won. Those who didn't, lost.",
  img: lookingToTheFuture,
  cardClass: "card-two",
  id: nanoid(),
  link: "/about/blog/looking-to-the-future",
  ctaText: "ReadMore",
};

const cardDataThree = {
  title: "Stacks of potential!",
  desc: "The tech stack, and how it's maximised, is an important differentiator for recruiters - for their clients, candidates, and their own consultants.",
  cardClass: "card-three",
  img: stacksOfPotential,
  id: nanoid(),
  link: "/about/blog/stacks-of-potential",
  ctaText: "ReadMore",
};


const Blog = () => {

     return (
       <Wrapper>
         <section className="section">
           <div className="section-center">
             <div className="section-title">
               <Animate>
                 <h1 className="heading-one-small">17 Oranges Blog</h1>
                 <span className="wiggle-lg"></span>
                 <div className="heading-one">
                  17 Oranges <span className="orange-bold">  NEWS </span>& <span className="orange-bold"> VIEWS </span>
                 
                 </div>
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
            
             </div>
           </div>
         </section>

         <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
       </Wrapper>
     );
};

export default Blog;
