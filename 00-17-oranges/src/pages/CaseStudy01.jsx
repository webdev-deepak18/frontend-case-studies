/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const CaseStudy01 = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>One in, One Out?</h1>
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
                An international leader in executive search, leadership
                development and interim services that has operated widely across
                both private and public sectors for over 25 years.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Problem</h2>
            </Animate>
            <Animate>
              <p>
                Their legacy CRM platform was hampering productivity, sales and
                employees’ efficiency, as employees typically were working
                around it, rather than with it. Maintaining a single source of
                truth had become challenging. Vital insights became scattered.
                Processes were circumvented to ensure pace of delivery.
              </p>
            </Animate>
            <Animate>
              <p>
                In short, the platform was getting in the way of their
                post-pandemic goals of scaling strongly and working smarter from
                anywhere.
              </p>
            </Animate>
            <Animate>
              <p>
                The senior leadership team engaged 17 Oranges to research and
                manage the migration to a cloud-based CRM.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                17 Oranges engaged the business at all levels to understand,
                challenge and articulate the business — top-down and across
                every business practice area. Our detailed game plan included:
              </p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Establishing trust and collaboration through multi-level
                  engagement and constant communication — explaining goals,
                  reasoning, findings and everyone’s roles using an inclusive
                  and enabling style.
                </li>
              </Animate>
              <Animate>
                <li>
                  Using an agile approach throughout that featured two-week
                  activity sprints.
                </li>
              </Animate>
              <Animate>
                <li>
                  Detailed landscape mapping (CRM-related technology, staff
                  interviews to understand process maturity, heat maps to target
                  changes, uncovering information governance [privacy and
                  security] status and gaps, identifying people and cultural
                  business challenges).
                </li>
              </Animate>
              <Animate>
                <li>
                  CRM market supplier review and RFI and RFP handling — we
                  managed the vendor selection process from long list to short
                  list to finalist in just three months, allowing the client to
                  focus on core business activities.
                </li>
              </Animate>
            </ul>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Client senior leadership was not only fully empowered and
                  ready to move forward with technology transformation, but they
                  also bought into the final supplier selected.
                </li>
              </Animate>
              <Animate>
                <li>
                  Although we identified that the current CRM would need to be
                  replaced, we gave the client assurance that their foundational
                  technologies, user devices and infrastructure were in good
                  working order.
                </li>
              </Animate>
              <Animate>
                <li>
                  Workshops uncovered key features that would improve user
                  experiences, productivity, mobility and management — and
                  provide strategic oversight for all.
                </li>
              </Animate>
              <Animate>
                <li>
                  The client now has a mature understanding of themselves and
                  their technology — they are less reactive and enjoy more
                  data-driven actionable insights.
                </li>
              </Animate>
              <Animate>
                <li>
                  The client chose to retain 17 Oranges for next phases:
                  supporting management of system, training and delivery. Their
                  transformation journey to deliver their “single source of
                  truth” continues.
                </li>
              </Animate>
            </ul>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default CaseStudy01;
