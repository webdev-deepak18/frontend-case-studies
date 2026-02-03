/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const KwandoCaseStudy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>An App From Scratch</h1>
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
              <p>
                A client that wanted to build a social planning app that makes
                it easier for friends and other groups to gather together,
                eliminating the frustration of having to communicate across
                various channels (multiple apps, phone calls, emails, etc.).
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Challenge</h2>
            </Animate>
            <Animate>
              <p>
                The client approached 17 Oranges and asked us to build the app
                from scratch. Since there was nothing like the desired app on
                the market at the time and the client had no developmental
                experience, we needed 1) to get clarity on the functionality and
                user experience that the app should offer, and 2) to find an
                effective way to collaborate with the client to ensure their
                vision was made reality.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                We began by organising a workshop that included several types of
                consumers and our in-house developers. Using those learnings, we
                worked alongside the client to identify the needed
                functionality, including the integration of other apps. We also
                set up an open project management portal, empowering the client
                to work with us and give feedback every step of the way.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <Animate>
              <p>
                The client has an app that realises their vision and helps
                consumers with their hectic social lives. Theory has turned into
                a valuable product. Better yet, the client felt included
                throughout the entire process, from formulation to rollout.
              </p>
            </Animate>
            <Animate>
              <p>
                We will continue to work with the client on enhancing their app,
                so they can grow their business. We are all excited to be on
                this journey together.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default KwandoCaseStudy;
