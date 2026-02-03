/** @format */

import Wrapper from "../assets/wrappers/CaseStudy";
import Cta from "../components/Cta";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Animate from "../components/Animate";

const Blog03 = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <span className="wiggle-lg"></span>
              <h1>Stacks of Potential</h1>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="section-center content-center">
          <div className="info-block">
            <Animate>
              <p>
                On February 9th, TALiNT Partners held their first tech leader
                lunch and learn event, in partnership with Access Recruitment.
                The discussion focused on how staffing and talent solutions
                providers can optimize their tech and talent to maximize
                opportunities around strategic solutions while improving
                integration, collaboration, and productivity. One of the main
                topics of the event was the importance of the tech stack in
                recruiting. Employers are increasingly seeking help from their
                vendor partners for workforce and demand planning, re-skilling &
                up-skilling, TA optimization, employer brand/EVP, and advisory
                services. Candidates expect a more personalized experience, and
                recruiters need integrated access to tech and data solutions to
                deliver a higher value service.
              </p>
            </Animate>
            <Animate>
              <p>
                The discussion touched on the importance of technology, which
                has levelled the playing field, enabling more agile SMEs to
                compete more effectively with larger competitors, and helping
                big staffing and RPO firms to adapt more quickly to challengers.
                Access Recruitment's Head of Strategy, Jason Martin, is a
                veteran TIARA judge and has observed some key trends and
                transformation drivers over the last five years. They have seen
                a move from building bespoke tech stacks to dominate a niche
                area of recruitment to simplification and better use of more
                standardized, cloud-based platforms where third party providers
                manage the infrastructure. This not only enables recruiters to
                focus on recruitment but means they can focus on some bespoke
                elements to differentiate around candidate experience or
                building talent pools. Furthermore, they discussed how AI and
                automation are transforming the sector in enabling more
                self-service elements for candidates and helping recruiters
                progress from transactional to more advisory offerings. The
                discussion also delved into what CTOs and CIOs can do to build
                better tech stack business cases for their boards. Increasing
                profitability is the business case, whether it's making people
                more effective or enabling higher margin services. A good CTO
                should be able to find the unnoticed orphan tools and projects
                that can deliver quick wins with early savings.
              </p>
            </Animate>
            <Animate>
              <p>
                Finally, they discussed how the tech stack has become a
                differentiator for recruiters in their ability to deliver a
                wider range of services, from payroll solutions to skills
                mapping and upskilling. However, the challenge is that it is not
                always apparent to clients. There is a great opportunity for
                recruiters to have a pre-sales product manager to explain the
                tech benefits under-pinning their recruitment service. It will
                help to win the client but also helps to build a more
                collaborative partnership at the start where the recruiter is
                recognized as an advisor, not just a gap filler.
              </p>
            </Animate>
          
          </div>
         
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default Blog03;
