/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const KloeberCaseStudy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>New Tech Opportunities</h1>
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
              <p>A bespoke glazing manufacturer.</p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Challenge</h2>
            </Animate>
            <Animate>
              <p>
                The manufacturer had a legacy Business Management Tool that was
                built in-house and in total disrepair, requiring near-constant
                firefighting. It had become a single point of failure — causing
                immense frustration for the senior leadership team because it
                could not keep up with the pace of the growth of the company.
                They turned to 17 Oranges for help.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                We started with discovery — documenting the system as it was,
                meeting with key stakeholders and identifying legacy problems.
                Next, we challenged the client on the future of the tool. Did
                they want to replace it or, much more exciting, productise it?
                We identified that there was a gap for a tool of this type in
                the market, creating an opportunity to sell it to other
                companies, which the client decided to pursue. We then created a
                roadmap to address the immediate challenges and refine the tool
                to make it effective and efficient. Finally, a go to market
                strategy was created to release the product.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <Animate>
              <p>
                What started out as a business-as-usual project to help the
                client understand their current solution evolved into a much
                larger project that:
              </p>
            </Animate>
            <ul>
              <Animate>
                <li>Created a completely new revenue stream for the client.</li>
              </Animate>
              <Animate>
                <li>Still addressed the original ask.</li>
              </Animate>
              <Animate>
                <li>
                  Brought in a new way of thinking about and approaching their
                  business.
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
                17 Oranges’ experience allowed the client to see what they had
                missed for years. Working with us enabled them to see other
                opportunities, giving them the competitive edge over other
                companies in their industry.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default KloeberCaseStudy;
