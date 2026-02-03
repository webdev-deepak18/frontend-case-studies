/** @format */

import Wrapper from "../assets/wrappers/Resourcing";
import { nanoid } from "nanoid";

import afroAmerican from "../assets/images/happy-african-man-with-wireless-headphone.webp";
import austronautOne from "../assets/images/austronaut-one.webp";
import austronautTwo from "../assets/images/austronaut-two.webp";
import austronautThree from "../assets/images/austronaut-three.webp";
import coolMan from "../assets/images/coolman-using-smartphone.webp";
import coolWoman from "../assets/images/cool-woman-wearing-specs.webp";
import happyTeam from "../assets/images/happy-team.webp";
import CardVertical from "../components/CardVertical";

import Cta from "../components/Cta";
import Animate from "../components/Animate";
import { motion } from "framer-motion";


const cardDataOne = {
  title: "Use Our Experts",
  desc: "Use our technology experts — developers, administrators, Salesforce consultants, etc. — to achieve amazing results.",
  img: austronautOne,
  cardClass: "",
  id: nanoid(),
  link: "/about/case-studies/tech-resourcing-support",
};
const cardDataTwo = {
  title: "Build Your Team",
  desc: "We build or fill out your development team by bringing in professionals with the skill sets you need to achieve your technology goals.",
  img: austronautTwo,
  cardClass: "",
  id: nanoid(),
  link: "/about/case-studies/tech-resourcing-support",
};

const cardDataThree = {
  title: "Get Operations Support",
  desc: "We operate within your technology team using our agile approach. We manage each team member and grow the team as needed.",
  cardClass: "",
  img: austronautThree,
  id: nanoid(),
  link: "/about/case-studies/technology-consulting",
};

const Resources = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <h1 className="heading-one-small">Technology Resourcing </h1>
              <span className="wiggle-lg"></span>
              <div className="heading-one">
                Welcome to Your Very Own{" "}
                <span className="orange-bold"> TECH RESOURCING HUB</span>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="section-center">
          <div className="info">
            <Animate>
              <h4>Need tech expert guidance or help filling in skills gaps?</h4>
            </Animate>
            <Animate>
              <h5>
                We can create and/or manage your development team as needed. So
                you can focus on growing your business.
              </h5>
            </Animate>
          </div>
        </div>

        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
          initial="hidden"
          animate="visible"
          src={afroAmerican}
          alt="arfo american"
          className="img info-img"
        />
      </section>

      {/* cards */}
      <h2 className="heading-two">Tech Staffing Solutions</h2>
      <section className="card-container">
        <CardVertical {...cardDataOne} />
        <CardVertical {...cardDataTwo} />
        <CardVertical {...cardDataThree} />
      </section>
      {/* end cards */}

      {/* answers section */}

      <section className="section">
        <div className="section-center">
          <div className="answers">
            <div className="info">
              <Animate>
                <span className="wiggle-lg"></span>
                <div className="heading-one pos-rel">
                  Flexible <span className="orange-bold">RESOURCING</span> for
                  Seamless Operations
                </div>
              </Animate>
              <Animate>
                <h3>
                  We can support your technology needs indefinitely. If you ever
                  need to transition your team in-house, we have a process to
                  seamlessly transfer staffing operations.
                </h3>
              </Animate>
            </div>
            <div className="img-container">
              <img src={happyTeam} alt="HappyTeam" className="img" />
            </div>
          </div>
        </div>
      </section>

      {/* end answers section */}
      <Cta img={coolWoman} />
    </Wrapper>
  );
};

export default Resources;
