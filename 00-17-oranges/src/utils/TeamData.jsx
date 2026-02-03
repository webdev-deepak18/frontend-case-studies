/** @format */
import professionalWoman from "../assets/images/professional-woman-smiling.webp";
import adamGibson from "../assets/images/adam_gibson.jpg";
import joeMillet from "../assets/images/joe_millet.jpg";
import kevinFell from "../assets/images/kevin_fell.jpg";
import luisCasas from "../assets/images/luis_casas.jpg";
import chrisFinlow from "../assets/images/chris_finlow.jpg";
import timWatson from "../assets/images/tim_watson.jpg";
import jamesMurray from "../assets/images/james_murray.png";
import tobyConiber from "../assets/images/toby_conibear.jpg";
import richardTurner from "../assets/images/richard_turner.jpg";

const TeamData = [
  {
    id: "adam-gibson",
    name: "Adam Gibson",
    role: "Founder",
    image: adamGibson,
    linkedIn: `https://www.linkedin.com/in/adammgibson/`,
    bio: [
      `I love to help amazing people and companies take on their next challenge, or evolve their existing capability, before their competitors do. I am lucky enough to have worked with stellar firms globally, across several industry sectors, and within start-up firms that have rapidly scaled to large organisations. `,
      `From vision, strategy and ideation to new product creation, integrations, migrations and business as usual evolution, my role is to bring fresh thinking, new insights and experienced people together to deliver business success. Whether we're providing agile capability to larger companies with legacy systems, or CxO-level leadership to challenger brands, we love to explore new ways of doing things.`,
    ],
  },
  {
    id: "joe-millett",
    name: "Joe Millett",
    role: "Head of Client Success",
    image: joeMillet,
    linkedIn: ``,
    // linkedIn: `https://www.linkedin.com/in/joemillett/`,
    bio: [
      `As the Head of Client Success, my role is to be the gateway between the client and the 17 Oranges team to ensure that delivery targets are achieved and to educate clients on our offerings. I work with our clients to identify new opportunities to help them continue their journey, however my most important responsibility is to represent the customer and be responsible for their overall needs. Whilst I work for 17 Oranges, I tend to think of myself as working for the client so every need of theirs is met.`,
      `In my previous roles, I was a systems administrator for one of the world's leading executive search firms, later becoming the global infrastructure manager and eventually the product manager where I identified the need and the larger business objectives that new technologies would fulfil. I worked closely with the stakeholders in the business ensuring that all projects were not only punctual but cost effective. Not only did I design, manage, and deliver the projects, I managed the delivery team that brought a global franchise business with separate systems, together under one technology umbrella and successfully migrated everything to the cloud as well as introducing a global support team with zero downtime.`,
      `In my spare time I am a keen cyclist, runner, and gym goer when I can drag myself away from the sofa or if the dog will allow me to.`,
    ],
  },
  {
    id: "kevin-fell",
    name: "Kevin Fell",
    role: "Director of Technology",
    image: kevinFell,
    linkedIn: ``,
    // linkedIn: `https://www.linkedin.com/in/kevin-fell-228409b2/`,
    bio: [
      `As the Director of Technology at 17 Oranges, my role is to manage the more intricate areas of digital transformations, system design and integrations.`,
      `With over fifteen years of professional experience as a software developer, specialising in technology design, system integrations and automation, I have acquired a rich knowledge of modern technology stacks.`,
      `I have worked on a variety of large, complex projects which vary from management information to business intelligence and data centralisation.`,
      `When I'm not working, I enjoy spending quality time with my family, going on walks and keeping up with the wonderful world of Formula 1.`,
    ],
  },
  {
    id: "luis-casas",
    name: "Luis Casas",
    role: "Head of Development",
    image: luisCasas,
    linkedIn: ``,
    // linkedIn: `https://www.linkedin.com/in/luis-casas-55283b27/`,
    bio: [
      `I am the Head of Development at 17 Oranges. From a very young age I always had the passion to explore and work with technology, this passion drove me to study a HND in Web Development followed by a BSc (Hons) degree in Multimedia Technology at Edinburgh Napier University.`,
      `At 17 Oranges I help clients to transform complicated projects into successful stories. I have a extend experience providing solutions for data migrations, system integrations and design and develop new software applications. I also enjoy working closely with clients, building relationships which helps me to understand their requirements.`,
      `Outside the techie world, I enjoy skateboarding (and snowboarding when possible), go out for long walks and cycle routes around Scotland and explore nature.`,
    ],
  },
  {
    id: "chris-finlow",
    name: "Chris Finlow",
    role: "Lead Developer",
    image: chrisFinlow,
    linkedIn: ``,
    // linkedIn: `https://uk.linkedin.com/in/chris-finlow-80b252167`,
    bio: [
      `As a passionate developer here at 17 Oranges, I work closely with the team to ensure projects are skilfully designed and implemented effectively.`,
      `Since I am a full stack developer, I have an abundance of experience from various projects, ranging from integrations to web applications and API's.`,
      `Keeping fit is really important so in my free time, I am often out cycling or enjoying a kick about with my friends.`,
    ],
  },
  {
    id: "tim-watson",
    name: "Tim Watson",
    role: "Solutions Architect",
    image: timWatson,
    linkedIn: ``,
    bio: [
      `With more than thirty years' experience in working with a varied range of applications, including Windows, Web e-commerce and key card control systems, I have gained an extensive range of knowledge and acquired skills, making me the perfect fit for every client and the answer to their problems.`,
      `I will take note of all my clients' needs and provide the solution which will exceed their requirements and surpass their expectations.`,
      `My hard work and determination reflect in the fact that many of my clients have been the source of ongoing development and professional recommendations for well over a decade.`,
      `When I'm not assisting clients, I like to unwind by riding motorcycles, whether that be on the racetrack, down Route 66, or touring the best mountain passes Europe has to offer. The only requirement needed for that are good friends to ride with`,
    ],
  },
  {
    id: "james-murray",
    name: "James Murray",
    role: "Managing Partner. Asia Pacific",
    image: jamesMurray,
    linkedIn: ``,
  },
  {
    id: "toby-conibear",
    name: "Toby Conibear",
    role: "Non-Executive Director",
    image: tobyConiber,
    linkedIn: ``,
    // linkedIn: `https://www.linkedin.com/in/toby-conibear-b6978b8/`,
    bio: [
      `Toby has worked for over 25 years in technology and is a multi-disciplined CCO/CRO with a wealth of experience in commercial engagement and leadership. An inspirational leader who leads from the front with a strong work ethic that inspires those around him.`,
      `Toby's experience spans Staffing and Recruitment Technology as well as consumer-focused mobile app technology, working at an international level with enterprise class CRM and ERP software and the broad spectrum of specialised, integrated, companion technologies. His experience and success in leading commercial teams on an international scale in the Staffing Technology space has led to the successful penetration of new markets both in terms of new products and geography's.`,
      `Toby is a technologist at heart and has a passion for technical solutions that add value to the end user. He has extensive experience in enabling technologies for both small and enterprise level businesses, meeting strategic objectives and driving financial growth. Toby is a firm believer in delivering business value via the use of innovative, forward-looking technologies.`,
    ],
  },
  {
    id: "richard-turner",
    name: "Richard Turner",
    role: "Chairman",
    image: richardTurner,
    linkedIn: ``,
    // linkedIn: `https://www.linkedin.com/in/toby-conibear-b6978b8/`,
    bio: [
      `Over thirty-five years in Technology.  Multi-disciplined CEO and COO with a wealth of experience in organisational growth. Experience spanning Travel, Automotive, Social Payment and Recruitment industries, amongst others. An inspirational leader who ‘leads from the front’ with a strong work ethic that inspires those around him.`,
    ],
  },
];

export default TeamData;
