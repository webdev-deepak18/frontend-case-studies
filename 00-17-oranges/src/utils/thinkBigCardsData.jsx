/** @format */

import partnership from "../assets/images/partnership.webp";
import trust from "../assets/images/trust.webp";
import sharing from "../assets/images/sharing.webp";
import encourage from "../assets/images/encourage.webp";
import fun from "../assets/images/fun.webp";
import socialResponsibility from "../assets/images/social-responsibility.webp";
import abby from "../assets/images/abby-lawrence.webp";
import tinyChanges from "../assets/images/tiny-changes.webp";

const charityUrl = (
  <a href="https://loom.ly/ods6QqI" target="_blank">
    https://loom.ly/ods6QqI
  </a>
);

const thinkBigCardsData = [
  {
    img: partnership,
    title: "Partnership",
    desc: "Our clients are our partners.",
  },
  {
    img: trust,
    title: "Trust",
    desc: "Trust between us and our partners is vital.",
  },
  {
    img: sharing,
    title: "Sharing",
    desc: "We share everything with each other to keep learning.",
  },
  {
    img: encourage,
    title: "Encourage",
    desc: "Encourage everyone to think big.",
  },
  {
    img: fun,
    title: "Fun",
    desc: "We love what we do and have fun doing it.",
  },
];

export const commitCardsData = [
  {
    title: "Sustainability",
    desc: (
      <p>
        We’re committed to integrating sustainability into every part of the
        business.That includes delivering sustainable products and solution
        implementation strategies to assist all of our clients (new and
        existing) in their own sustainability paths.
      </p>
    ),
    img: socialResponsibility,
  },
  {
    title: "Sponsorship",
    desc: (
      <p>
        17 Oranges is proud to sponsor up-and-coming rugby player Abby Lawrence.
        Abby plays for Aston Old Edwardians RFC, and we think she has what it
        takes to go to the very top. So we're pleased to do what we can to help
        her reach her potential.
      </p>
    ),
    img: abby,
  },
  {
    title: "Charity",
    desc: (
      <p>
        To raise money for the charity Tiny Changes, members of the 17 Oranges
        team flew to India to spend a week riding the mountain passes of the
        Indian Himalayas. Tiny Changes, whose mission to “make tiny changes to
        earth,” is a community of tiny change makers, working together to help
        young minds feel better. Read more about them here:{" "}
        <a href="https://loom.ly/ods6QqI" target="_blank" style={{color: 'var(--primary-500)'}}>
          https://loom.ly/ods6QqI
        </a>
      </p>
    ),
    img: tinyChanges,
  },
];

export default thinkBigCardsData;
