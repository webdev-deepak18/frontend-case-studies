/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const CaseStudy03 = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Factoring: Time is Money</h1>
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
                A company that provides accounts receivable and receivables
                management services for an international client base across
                multiple industries (logistics and transport, construction,
                manufacturing).
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Problem</h2>
            </Animate>
            <Animate>
              <p>
                The client handles approximately 200,000 incoming invoices and
                receipts per year, and was originally handling all processes
                manually (invoices checked by employees, manually entered into
                system, and finally stored on system). These legacy procedures
                did not scale, and severely restricted the company's growth
                plans.
              </p>
            </Animate>
            <Animate>
              <p>
                A pending business takeover with many more customers was a
                catalyst for change, as the client did not want to hire new
                employees.
              </p>
            </Animate>
            <Animate>
              <p>
                The client decided that they needed an interactive web portal
                that would provide elevated levels of automation and convenience
                for both customers and employees. They approached 17 Oranges for
                help. Their needs included:
              </p>
              <ul>
                <Animate>
                  <li>
                    Ability for customers to upload invoices directly to the
                    portal via login or to send them to the portal via email
                  </li>
                </Animate>
                <Animate>
                  <li>
                    Automatic extraction of invoices and validity checks, so
                    that employees only check for exceptions
                  </li>
                </Animate>
                <Animate>
                  <li>
                    Automatic transferring of data to trigger further processes
                  </li>
                </Animate>
                <Animate>
                  <li>Automated invoice archiving, with search capabilities</li>
                </Animate>
              </ul>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Solution</h2>
            </Animate>
            <Animate>
              <p>
                The client needed a single portal consisting of two
                interconnected areas: a client portal for customers and a
                productivity portal for employees.
              </p>
            </Animate>
            <Animate>
              <p>
                We began with a short discovery process to analyse and document
                the current operational model, giving us full insight into the
                existing software infrastructure and critical daily business
                processes. Based on this analysis, concepts and a scope were
                agreed on, and development started.
              </p>
            </Animate>
            <Animate>
              <p>
                We built a user-friendly invoice upload tool directly into the
                customer portal. The simple solution: invoices are emailed, with
                a mail server that has customer-specific mailboxes automatically
                fetching them from the portal.
              </p>
            </Animate>
            <Animate>
              <p>
                Employees then are able to access the data via what is known as
                the “invoice inbox”. A flexible invoice analysis solution —
                adapted to the exact specifications of the client — is used to
                scan and extract the data.
              </p>
            </Animate>
            <Animate>
              <p>
                All submitted invoices are processed in batches in seconds using
                OCR technology and machine learning, then checked for validity
                (e.g., Correct bank account number on the invoice, Do the
                amounts match? Does the customer number and account match?
                etc.).
              </p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <h2>The Results</h2>
            </Animate>
            <ul>
              <Animate>
                <li>
                  Within days, employees noticed tremendous time savings from
                  automated invoice management.
                </li>
              </Animate>
              <Animate>
                <li>Manual entry errors were removed.</li>
              </Animate>
              <Animate>
                <li>Management oversight of the process was enhanced.</li>
              </Animate>
              <Animate>
                <li>
                  The client is now able to comfortably acquire new business.
                </li>
              </Animate>
              <Animate>
                <li>
                  Thrilled with these results, the management team has requested
                  further expansion and enhancement of the portal, both to
                  automate other process components and further enhance the
                  customer experience. These enhancements are scheduled to be in
                  production by the end of 2023.
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

export default CaseStudy03;
