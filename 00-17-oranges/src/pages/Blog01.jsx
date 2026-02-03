/** @format */

import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const blog01 = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>17 Oranges attend Rec Expo 2023</h1>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="section-center content-center">
          <div className="info-block">
            <Animate>
              <p>
                At the Recruitment Agency Expo 2023, a common theme that kept
                coming up was how AI was going to impact the sector. So, we
                asked it! We asked Chat GPT, What were the key themes of the
                recruitment agency expo 2023.
              </p>
            </Animate>
            <Animate>
              <p>
                It's response was: I'm sorry, but as an artificial intelligence
                language model, I do not have access to information about future
                events or their themes. My training data only goes up until 2021
                and I cannot predict or provide information about events that
                may or may not occur in the future.
              </p>
            </Animate>
            <Animate>
              <p>
                So then we asked: what do you think about the latest recruitment
                expo in london?
              </p>
            </Animate>
            <Animate>
              <p>
                It replied: As an artificial intelligence language model, I
                don't have personal opinions or emotions, but I can provide you
                with some general information about recruitment expos in London.
              </p>
            </Animate>
            <Animate>
              <p>
                Unfortunately, I don't have access to information beyond
                September 2021 and cannot provide you with insights about any
                recruitment expos that may have occurred after that time.
                However, I can tell you that recruitment expos are events where
                recruitment agencies, job seekers, and employers come together
                to discuss job opportunities, recruitment strategies, and
                industry trends.
              </p>
            </Animate>
            <Animate>
              <p>
                These expos are a great way for companies to meet potential
                candidates face-to-face and to showcase their brand, culture,
                and values. Attendees can also network with other professionals
                in their field and learn about the latest hiring practices and
                technologies.
              </p>
            </Animate>
            <Animate>
              <p>
                Overall, the value of a recruitment expo depends on the
                individual's goals and needs. Some attendees may find it helpful
                to learn about the latest recruitment trends and strategies,
                while others may use the expo as an opportunity to connect with
                potential employers and secure job offers.
              </p>
            </Animate>
            <Animate>
              <p>Make of that what you will!</p>
            </Animate>
          </div>
          <div className="info-block">
            <Animate>
              <div className="quote">
                "Such an amazing show. You can really see the culture and vibe
                thriving." <br></br>- Adam
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default blog01;
