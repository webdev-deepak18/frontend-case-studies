/** @format */

import { ReactComponent as Idea } from "../assets/images/idea.svg";
import { ReactComponent as Announce } from "../assets/images/loud-speaker.svg";
import { ReactComponent as Connection } from "../assets/images/people.svg";
import { ReactComponent as Strategy } from "../assets/images/chess-pieces.svg";
import { ReactComponent as Work } from "../assets/images/gears.svg";
import { ReactComponent as Target } from "../assets/images/target.svg";
import { ReactComponent as Plan } from "../assets/images/plan.svg";
import { ReactComponent as Build } from "../assets/images/build.svg";
import { ReactComponent as Run } from "../assets/images/run.svg";

const consultancyCardsData = [
  {
    icon: <Plan />,
    title: "plan",
    desc: [
      `Detailed current-state, no-bull report and score. What is good and what is bad.
`,
      `Conduct business planning and refine end goal. Where do you want to get to?
`,
      `Supplier evaluation and selection. Who and what best matches your needs.`,
      `Identify which commercial options match your future desired outcomes.`,
      `Provide cost, consumption, and performance transparency.
`,
      `Build and approve the blueprint or scope that best fits your destination.`,
      `Understand time, cost and resources on all sides.`,
    ],
  },
  {
    icon: <Build />,
    title: "build",
    desc: [
      `Turn your blueprint into reality through a comprehensive building process.
`,
      `Cleanse & test data.
`,
      `Test processes.
`,
      `Track suppliers’ cost and time.
`,
      ` Stakeholder reporting
`,
      `Update processes and staff handbooks.
`,
      `Onboard your trainers and technology teams.
`,
      `Test processes with data.`,
      `Test the platform.`,
      `Work closely with stakeholders to build trust.`,
      `Complete all user training.
`,
      `Complete/test report build & share.`,
      `Migrate data – begin full testing, backups and promote ‘Live’ Day.
`,
    ],
  },
  {
    icon: <Run />,
    title: "run",
    desc: [
      `Your next platform is live.`,
      `Ensure adoption is high.`,
      `Update support guides,`,
      `Monitor & Optimise.
`,
      `Ensure governance, privacy and security are tracked.
`,
      `Provide escalation support for incidents, changes, and requests.
`,
      `Offer preventive maintenance.
`,
      `Allocate team of super-users to be on hand at go-live.`,
    ],
  },
];

export default consultancyCardsData;
