/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Bio";
import TeamData from "../utils/TeamData";
import { useLoaderData } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Animate from "../components/Animate";
import { nanoid } from "nanoid";
import { HashLink } from "react-router-hash-link";

export const loader = ({ params }) => {
  const { id: urlId } = params;
  return { urlId };
};

const Bio = () => {
  const { urlId } = useLoaderData();
  const Bio = TeamData.find((leader) => {
    return leader.id === urlId;
  });

  const { id, name, role, image, bio, linkedIn } = Bio;

  return (
    <Wrapper>
      <section className="section">
        <div className="section-center container">
          <Animate>
            <img src={image} alt={name} className="img bio-img" />
          </Animate>
          <div>
            <div className="info-header">
              <Animate>
                <h3>{name}</h3>
                <small>{role}</small>
                {linkedIn && (
                  <Link to={linkedIn} target="_blank" className="icon">
                    <AiOutlineLinkedin />
                  </Link>
                )}
              </Animate>
            </div>
            <Animate>
              <hr />
            </Animate>
            <div className="info-block">
              {bio &&
                bio.map((para) => {
                  return (
                    <Animate key={nanoid()}>
                      <p>{para}</p>
                    </Animate>
                  );
                })}
            </div>
            <Animate>
              <HashLink to={`/about/leadership#team`} className="btn">
                Back
              </HashLink>
            </Animate>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Bio;
