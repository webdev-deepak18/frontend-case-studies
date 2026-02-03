/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const CaseStudy04 = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Constructing Value</h1>
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
                A Germany-based personnel service provider that deploys skilled
                specialist staffing across Europe for construction projects and
                supply technology.
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Problem</h2>
            </Animate>
            <Animate>
              <p>
                The client employs 1,100 staff from various specialist trades,
                and for over 20 years relied on employees manually reporting via
                timesheets their working hours to the accounting department at
                the end of the week.
              </p>
            </Animate>
            <Animate>
              <p>
                These are sent by post, process by accounting, uploaded and
                archived. Similarly, customer invoicing based on the timesheets
                was all managed by post.
              </p>
            </Animate>
            <Animate>
              <p>
                The client’s leadership knew these processes required updating
                to deliver greater efficiencies and to support business growth.
                They commissioned a project with 17 Oranges to digitize this
                workflow.
              </p>
            </Animate>
            <Animate>
              <p>In particular, they sought to:</p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Build a portal for every employee to easily create and send
                  their timesheets digitally.
                </li>
              </Animate>
              <Animate>
                <li>
                  Simplify the processing and archiving of timesheets by
                  accounting.
                </li>
              </Animate>
              <Animate>
                <li>
                  To migrate from paper and post to email, thereby saving
                  considerable time and administrative effort.
                </li>
              </Animate>
            </ul>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                We developed an online “staff portal” based on SITEFORUM’s
                digitization platform. Components included:
              </p>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Timesheets were adapted into a user-friendly digital form with
                  portal access by employees via a tablet. This enables
                  completion of daily timesheets in just a few steps then
                  customers complete with a digital signature.
                </li>
              </Animate>
              <Animate>
                <li>
                  At the end of the working week, employee timesheets are
                  emailed to the accounting department. Postal delays no longer
                  exist as the data is stored directly in the portal.
                </li>
              </Animate>
              <Animate>
                <li>
                  Using the new dashboard, finance teams can review all
                  timesheets at a glance (fully sorted and readable), allowing
                  for rapid processing.
                </li>
              </Animate>
              <Animate>
                <li>
                  A PDF invoice is generated from each data record, saving time
                  using emailed invoices.
                </li>
              </Animate>
              <Animate>
                <li>
                  Archiving of timesheets is fully automated and searchable as
                  required.
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
                  The process of managing employee working hours and customer
                  invoicing has been transformed.
                </li>
              </Animate>
              <Animate>
                <li>
                  The client achieved savings via better time management,
                  mature, efficient process control and zero postage cost.
                </li>
              </Animate>
              <Animate>
                <li>
                  Timesheet processing no longer was a hindrance on scale as
                  before.
                </li>
              </Animate>
              <Animate>
                <li>
                  Pleased with initial results, leadership have requested
                  development of additional projects.
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

export default CaseStudy04;
