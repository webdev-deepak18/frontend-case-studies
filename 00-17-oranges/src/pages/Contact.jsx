/** @format */

import React from "react";

import Wrapper from "../assets/wrappers/Contact";
import austronaut from "../assets/images/austronaut.webp";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Phone } from "../assets/images/phone.svg";
import { ReactComponent as Email } from "../assets/images/mail.svg";
import { ReactComponent as Message } from "../assets/images/message.svg";
import { ReactComponent as Binocular } from "../assets/images/binocular.svg";
import { ReactComponent as Attachment } from "../assets/images/attachment.svg";
import Animate from "../components/Animate";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={austronaut} alt="austronuat" className="img desktop-img" />
        <div className="info">
          <Animate>
            <h1 className="page-title">
              Let's have a <span className="orange-bold">Chat</span>
            </h1>
          </Animate>
          <img src={austronaut} alt="austronuat" className="img mobile-img" />
          <Animate>
            <div className="form-container">
              <p className="desc">
                We’d love to talk with you about your technological challenge,
                and to suggest a plan for addressing it. Our consultants,
                engineers and digital experts have experience working at every
                level of global organisations — and have seen just about every
                tech issue.
              </p>
              <p className="desc">Call us at UK Number: +44 (0) 203 9896 170 or US Number: +61(0) 460 171717</p>
              <h3 className="form-title">We’re here to help.</h3>
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
      </div>
    </Wrapper>
  );
};

export default Contact;
