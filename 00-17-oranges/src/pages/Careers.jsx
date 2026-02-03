/** @format */

import React from "react";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Phone } from "../assets/images/phone.svg";
import { ReactComponent as Email } from "../assets/images/mail.svg";
import { ReactComponent as Message } from "../assets/images/message.svg";
import { ReactComponent as Binocular } from "../assets/images/binocular.svg";
import { ReactComponent as Attachment } from "../assets/images/attachment.svg";
import Wrapper from "../assets/wrappers/Careers";
import { FaAngleDoubleRight } from "react-icons/fa";
import { nanoid } from "nanoid";
import youngElegantGirl from "../assets/images/young-elegant-girl.webp";
import Animate from "../components/Animate";

const skills = [
  `Knowledge of frontend and backend web-based technologies including SPA’s and API’s.`,
  `Understanding of TypeScript, JavaScript and PHP frameworks (Node, React, NestJS).`,
  `Knowledge of database technologies including SQL and ORM's.`,
  `Knowledge in web security and vulnerabilities.`,
  `Excellent communication and time keeping skills.`,
  `Desire to learn new technologies.`,
];

const Careers = () => {
  return (
    <Wrapper>
      <section className="section hero">
        <div className="hero-center">
          <div className="hero-info">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1 className="pos-rel">
                Love Your <span className="orange-bold">Job</span>
                <br />
                Love Your <span className="orange-bold">Team</span>
              </h1>
            </Animate>
            <Animate>
              <h4>
                We take great work seriously, but don’t take ourselves that way!
              </h4>
            </Animate>
          </div>
          <Animate>
            <div className="hero-img">
              <img
                src={youngElegantGirl}
                alt="Young Elegant Girl"
                className="img"
              />
            </div>
          </Animate>
        </div>
      </section>

      <section className="section form-title-section">
        <Animate>
          <div className="section-center">
            <h2 className="form-heading">
              <span>Developer</span> - Position Available
            </h2>
            <div className="underline"></div>
          </div>
        </Animate>
      </section>
      <section className="section form-section">
        <div className="section-center form-center">
          <div className="info-container">
            <div className="info">
              <Animate>
                <h3>Who we are looking for</h3>
              </Animate>
              <Animate>
                <p>
                  We are looking for an enthusiastic developer with a good
                  understanding of web-based technologies to join our amazing
                  team. This is a fantastic opportunity for a passionate
                  developer seeking to gain practical experience within the
                  technology industry.
                </p>
              </Animate>
            </div>
            <div className="skills">
              <Animate>
                <h3>Desired Skills</h3>
              </Animate>
              {skills.map((para) => {
                return (
                  <Animate>
                    <div className="skill" key={nanoid()}>
                      <span className="skill-icon">
                        <FaAngleDoubleRight />
                      </span>
                      <p className="skill-text">{para}</p>
                    </div>
                  </Animate>
                );
              })}
            </div>
          </div>
          <Animate>
            <div className="form-container">
              <form className="form">
                <div className="form-row">
                  <label htmlFor="name" className="form-label">
                    <User /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="phone" className="form-label">
                    <Phone /> Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email" className="form-label">
                    <Email /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message" className="form-label">
                    <Message /> Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-input"
                    placeholder=""
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message" className="form-label">
                    <Binocular /> How did you find out about us?
                  </label>
                  <select
                    name="message"
                    id="message"
                    className="form-input"
                    placeholder=""
                  >
                    <option value="">Please Select</option>
                    <option value="searchengine">Search Engine</option>
                    <option value="anotherwebsite">Another Website</option>
                    <option value="Recommendation">Recommendation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-label attachment">
                    <Attachment /> <a>Upload Resume</a>
                  </div>
                </div>
                <p className="form-row terms ">
                  Please note that your data will be stored in line with our{" "}
                  <a href="#" target="_blank">
                    Privacy Policy
                  </a>
                </p>
                <div className="form-row">
                  <button type="submit" className="btn btn-submit" disabled>
                    GET STARTED
                  </button>
                </div>
              </form>
            </div>
          </Animate>
        </div>
      </section>
    </Wrapper>
  );
};

export default Careers;
