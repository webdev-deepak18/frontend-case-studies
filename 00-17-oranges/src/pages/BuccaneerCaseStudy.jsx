/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const BuccaneerCaseStudy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Exceeding Expectations</h1>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="section-center content-center">
          <div className="info-block">
            <Animate>
              <h2>The Client</h2>
            </Animate>
            <Animate>
              <p>A pioneering new adventure sports app.</p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Challenge</h2>
            </Animate>
            <Animate>
              <p>
                The company was ready to take off, but needed a web app to go
                hand in hand with their existing mobile app. They came to 17
                Oranges needing the web app to be created quickly, as the season
                for kite surfing (one of the company’s primary markets) was
                starting within weeks.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                We worked with the customer to understand their needs and goals
                for the web app to ensure that the final product reflected their
                vision and matched the branding of the mobile app. We engaged an
                experienced external web designer on behalf of the customer to
                create the requested site look and feel. Our in-house dev team
                then designed and implemented the user-friendly functionality of
                the web app to incorporate all of the customer’s requirements.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <Animate>
              <p>The web app was a success:</p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Launched within the tight timescale (by the start of the kite
                  surfing season).
                </li>
              </Animate>
              <Animate>
                <li>
                  Helped the customer to increase their visibility and reach new
                  clients.
                </li>
              </Animate>
              <Animate>
                <li>Helped to improve their client service.</li>
              </Animate>
            </ul>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Conclusion</h2>
            </Animate>
            <Animate>
              <p>
                We successfully delivered a web app that met the customer&#39;s
                needs and exceeded their expectations. The web app was a
                valuable asset to the business and helped them achieve their
                goals.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default BuccaneerCaseStudy;
