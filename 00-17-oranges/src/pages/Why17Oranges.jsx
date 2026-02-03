/** @format */

import Wrapper from "../assets/wrappers/Why17Oranges";
import { nanoid } from "nanoid";

import superCoolWoman from "../assets/images/super-cool-woman.webp";

import butterfly from "../assets/images/futuristic-butterfly.webp";

import superCoolMan from "../assets/images/man-posing-with-headphones.webp";
import { FaQuoteLeft } from "react-icons/fa";
import Cta from "../components/Cta";
import thinkBigCardsData from "../utils/thinkBigCardsData";

import { commitCardsData } from "../utils/thinkBigCardsData";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import Animate from "../components/Animate";
import { keyframes } from "styled-components";

const Why17Oranges = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <h1 className="heading-one-small">Why 17 Oranges?</h1>
              <span className="wiggle-lg"></span>
              <div className="heading-one">
                We Help Clients
                <br />
                <span className="orange-bold"> FULL STOP.</span>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="section-center">
          <Animate>
            <h4>
              We combine extensive business experience with technical skill. We
              don’t take ourselves too seriously. But we consistently deliver.
            </h4>
          </Animate>
        </div>
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
          initial="hidden"
          animate="visible"
          src={superCoolWoman}
          alt="super cool woman"
          className="img info-img"
        />
      </section>

      {/* think big */}
      <section className="section">
        <div className="section-center">
          <Animate>
            <h3 className="big-title">
              We encourage everyone to{" "}
              <span className="big-one orange-bold"> THINK</span>
              <span className="orange-bold big-two"> BIG</span>
            </h3>
          </Animate>
          <div className="cards-container">
            {thinkBigCardsData.map((item) => {
              const { img, title, desc } = item;
              return (
                <Animate key={nanoid()}>
                  <article className="card">
                    <img src={img} className="img card-img" alt={title} />
                    <div className="card-info">
                      <h3>{title}</h3>
                      <div className="divider-line"></div>
                      <p className="desc">{desc}</p>
                    </div>
                  </article>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>
      {/* end think big */}

      {/* commitment */}

      <section className="section social-section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <div className="heading-one">
                Our Commitment to do the{" "}
                <span className="orange-bold">RIGHT THING</span>
              </div>
              <h3 className="heading-one-small">
                We believe in acting responsibly as a company. We also believe
                in actively giving back not just to our local community, but to
                people wherever they live.
              </h3>
            </Animate>
          </div>         
        </div>
        <div className="section-center">
          <div className="commit-cards">
            {commitCardsData.map((item)=>{
              const {title, desc, img} = item 
             return <div className="commit-card" key={nanoid()}>
              <img src={img} alt={title} className="commit-img img" />
              <div className="commit-info">
                <h3>{title}</h3>
                {desc}
              </div>
             </div>
            })}
          </div>
        </div>
      </section>

      {/* end commitment */}
      {/* <div className="testimonials-small-container"> */}
        <Testimonials img={butterfly} />
      {/* </div> */}
      <Cta img={superCoolMan} />
    </Wrapper>
  );
};

export default Why17Oranges;
