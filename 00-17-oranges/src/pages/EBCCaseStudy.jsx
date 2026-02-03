/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";


const EBCCaseStudy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Mentoring For Success</h1>
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
              <p>A rapidly growing employment background checking company.</p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Challenge</h2>
            </Animate>
            <Animate>
              <p>
                The company had a young and highly talented development team,
                but it was lacking in experience. They recognized that the team
                needed guidance to overcome the challenges they faced in a
                security-focussed environment that was more than just fast-paced
                … it was accelerating. They turned to 17 Oranges for interim
                mentorship.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                One of our senior architects became the team’s mentor. They
                joined the team on their daily stand-ups. They spent time with
                developers individually and with the team as a whole. They
                quickly helped the team put processes in place that helped them
                spot challenges before they became fires. Ultimately, they
                helped the team build a framework for success.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <Animate>
              <p>The results of the mentorship were quick and far reaching:</p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  The team was armed with new processes allowing them to work
                  much more efficiently, minimising reworks and bug fixes.
                </li>
              </Animate>
              <Animate>
                <li>
                  The team was able to execute their developmental roadmap on
                  time and on budget.
                </li>
              </Animate>
              <Animate>
                <li>
                  It provided a springboard for a new way of working for the
                  team that has now been adopted by the company as a whole.
                </li>
              </Animate>
            </ul>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Conclusion</h2>
            </Animate>
            <Animate>
              <p>
                We used our years of running large- and small-scale projects to
                help the development team increase their output, giving the
                client confidence that their technology would allow them to
                continue to grow their business.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default EBCCaseStudy;
