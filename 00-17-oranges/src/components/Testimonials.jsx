/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Wrapper from "../assets/wrappers/Testimonials";
import happyGirl from "../assets/images/happy-girl.webp";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialsData from "../utils/TestimonialsData";
import { nanoid } from "nanoid";
import Animate from "./Animate";

const Testimonials = ({ img }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 7000,
    adaptiveHeight: 1,
    cssEase: "linear",
  };
  return (
    <Wrapper className="section">
      <Animate>
        <div className="testimonials-container">
          {/* <img src={img} alt="happy girl" className="img desktop-img" /> */}

          <div className="section-center">
            <div className="section-title">
              <h3>
                Why Clients Love <span className="orange-bold">17 Oranges</span>
              </h3>
            </div>
            <div className="sliders-container">
              <img src={img} alt="happy girl" className="img mobile-img" />
              <div className="sliders">
                <Slider {...settings}>
                  {TestimonialsData.map((item) => {
                    const { quote, author, authorTitle, companyLogo } = item;

                    return (
                      <div className="single-slider" key={nanoid()}>
                        <span className="quote-icon">
                          <FaQuoteLeft />
                        </span>
                        <div className="quote-text-container">
                          <p className="quote-text">{quote}</p>
                        </div>
                        <div className="author-logo-container">
                          <div className="author-container">
                            <h5 className="author">
                              {author} 
                              <span className="author-title">
                                {authorTitle}
                              </span>
                            </h5>
                          </div>
                          {companyLogo && (
                            <div className="logo-container">
                              <img
                                src={companyLogo}
                                alt="Logo"
                                className="img logo-img"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Animate>
    </Wrapper>
  );
};

export default Testimonials;
