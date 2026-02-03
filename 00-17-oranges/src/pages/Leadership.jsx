/** @format */

import Wrapper from "../assets/wrappers/Leadership";
import adamGibson from "../assets/images/adam-gibson.webp";
import professionalWoman from "../assets/images/professional-woman-smiling.webp";
import { nanoid } from "nanoid";
import TeamCard from "../components/TeamCard";
import Animate from "../components/Animate";
import TeamData from "../utils/TeamData";

const letterContent = [
  `Often the second question people ask me about 17 Oranges is, “What makes us different from other companies that offer technology consulting and solutions?”`,
  `(You can probably guess the first question. The answer to that is the name is impactful, memorable, and different — which is what we strive to be. But I digress …)`,
  `So, what makes us different? Well, I can say we do great work. That we’re smart. That we like to have a good time and keep our clients smiling and satisfied. But let’s face it, we’re not the only company that can (truthfully) say those things.`,
  `So, what really makes us different? Our collective, unique first-hand practical experiences in solving technology challenges. We have such varying technological and business backgrounds, with incredibly diverse skill sets. Not only have we made enough trips around the sun that we’re familiar with the journeys our clients are on — but we’ve also been on similar ones ourselves. And along the way we have acquired the hard-earned knowledge to understand the challenges and the pitfalls, and most importantly, to know what works.`,
  `And when you combine our first-hand experience with all the other good stuff, I think that makes our team pretty exceptional.`,
];

const Leadership = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>
                <span className="">
                  What Makes Us Exceptional?
                </span>{" "}
                <br />
                <span className="orange-bold">FIRST-HAND EXPERIENCE</span>
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section letter-section ">
        <Animate>
          <div className="section-center">
            <div className="letter-info">
              {letterContent.map((para) => {
                return (
                  <Animate key={nanoid()}>
                    <p>{para}</p>
                  </Animate>
                );
              })}
            </div>
            <Animate>
              <div className="author-container">
                <div className="author-info">
                  <div className="divider-line"></div>
                  <h5>
                    CEO <span className="orange-bold">Adam Gibson</span>
                  </h5>
                </div>
                <img src={adamGibson} alt="adam gibson" className="img" />
              </div>
            </Animate>
          </div>
        </Animate>
      </section>

      <section className="section " id="team">
        <div className="section-center creative-section">
          <div className="title">
            <Animate>
              <span className="wiggle-lg"></span>
              <div  className="heading-one pos-rel">
                Our <span className="orange-bold">Senior</span> Leadership Team
              </div>
            </Animate>

            {/* <Animate>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                quidem voluptates ratione amet tempora velit quis laborum,
                voluptatibus et.
              </h4>
            </Animate> */}
          </div>

          <div className="cards-container">
           {TeamData.map((item)=>{
            
            return <TeamCard key={nanoid()} {...item}/>
           })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Leadership;
