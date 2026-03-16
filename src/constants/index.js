import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  faalen,
  iou,
  jcc,
  audio,
  mirathzakaat,
  sesdo,
  breakdown,
  fashion,
  space,
  mood,
  techgam,
  threejs,
  nextjs,
  laravel,
  reactnative,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js, Next.js, Tailwind CSS, HTML 5, CSS 3, JavaScript (ES6+)",
    icon: web,
  },
  {
    title: "React Native, Android basics  & TypeScript",
    icon: mobile,
  },
  {
    title: "PHP Laravel, MySQL, Git & GitHub",
    icon: backend,
  },
  {
    title: "GitHub Copilot, V0, Antigravity (AI-first IDE) & Gemini",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
];

const experiences = [
   {
    title: "THREE MONTHS INTERNSHIP AT JCC",
    company_name: "participated in some major projects of Jasseh Code Camp",
    icon: jcc,
    iconBg: "#383E56",
    date: "NOV 2025 - FEB 2026",
    points: [
      "SESDO football management system",
      "BECL website backend upgration",
      "AI tools & Automation",
    ],
  },
  {
    title: "INTERNATIONAL OPEN UNIVERSITY",
    company_name: "Bachelor of Information Technology",
    icon: iou,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
      "Maintained GPA of 3.3/4.0",
      "Web Application Development.",
      "Database Systems.",
      "Software Engineering Principles.",
      "Artificial Intelligence.",
      "And many more....",
    ],
  },
  {
    title: "JASSEH CODE CAMP",
    company_name: "Advanced Frontend Development",
    icon: jcc,
    iconBg: "#383E56",
    date: "July 2024",
    points: ["React.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "DIGITAL SKILLS TRAINING",
    company_name: "Computer Networking",
    icon: faalen,
    iconBg: "#383E56",
    date: "October 2023",
    points: [
      "Networking fundamentals.",
      "Cisco packet tracer.",
      "Networking protocols.",
      "CCTV Installation.",
    ],
  },
  {
    title: "DIGITAL SKILLS TRAINING",
    company_name: "Web Development Basics",
    icon: faalen,
    iconBg: "#383E56",
    date: "June 2023",
    points: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "INTERNATIONAL OPEN UNIVERSITY",
    company_name: "Certificate in (IC3)",
    icon: iou,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "Awarded as the best student (A+)",
      "Internet and Computer core certificate",
    ],
  },
  {
    title: "INTERNATIONAL OPEN UNIVERSITY",
    company_name: "Certificate in (IEC)",
    icon: iou,
    iconBg: "#383E56",
    date: "2015",
    points: [
      "Awarded as the best student (Valedictory award)",
      "Intensive English course",
    ],
  },
  {
    title: "MAHAD ISLAMIC INSTITUTE",
    company_name: "Certificate in Islamic Studies",
    icon: "",
    iconBg: "#383E56",
    date: "2013",
    points: [
      "Awarded as the second best student",
      "Islamic Senior Secondary School Certificate",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illo eos animi fuga quos, quo enim earum eaque quisquam eum magni mollitia numquam facilis iure cumque aperiam nisi ea! Odio.",
    name: "to be added...",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illo eos animi fuga quos, quo enim earum eaque quisquam eum magni mollitia numquam facilis iure cumque aperiam nisi ea! Odio.",
    name: "to be added...",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illo eos animi fuga quos, quo enim earum eaque quisquam eum magni mollitia numquam facilis iure cumque aperiam nisi ea! Odio.",
    name: "to be added...",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
    {
    name: "INHERITANCE & ZAKAAT CALCULATOR",
    description:
      "It's a React Native mobile app that calculates the Islamic inheritance and zakaat with the Islamic rules. it's a dual language app (English and Arabic)",
    tags: [
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mirathzakaat,
    source_code_link: "https://github.com/mustapha-jaiteh/mirath-zakaat",
    website_link: "######",
  },
 
 
  {
    name: "FASHION TRENDS STORE",
    description:
      "It's an e-commerce app that allows users to browse and purchase latest fashion trends online. It also provides a feature to create a personalized shopping list based on the user's preferences and previous purchases.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://github.com/mustapha-jaiteh/fashion-shop",
    website_link: "https://fashion-trends-ochre.vercel.app/",
  },
   {
    name: "SESDO FOOTBALL MANAGEMENT SYSTEM",

    description:
      "It's a football management system for Serekunda East Sports Development Organisation. It displays the teams, players, matches, and the results of the matches. (I developed some modules of this project during my internship at Jasseh Code Camp)",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP-Laravel",
        color: "pink-text-gradient",
      },
       {
        name: "Inertia.js",
        color: "green-text-gradient",
      },
    ],
    image: sesdo,
    source_code_link: "https://github.com/mustapha-jaiteh/sesdo-team-admin",
    website_link: "###",
  },
   {
    name: "MOOD TRACKER APP",
    description:
      "Daily mood tracker app that helps users track their moods and activities. It provides a feature to check sleeping hours, daily activities and tracks the user's mood throughout the day.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "neon-db",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mood,
    source_code_link: "https://github.com/mustapha-jaiteh/mood-tracker",
    website_link: "",
  },
  {
    name: "IT COMPANIES DIRECTORY",
    description:
      "TECH IN GAMBIA is the ultimate directory for IT companies in The Gambia. the website helps users discover and connect with tech companies, including software firms, ISPs, and GSM providers.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techgam,
    source_code_link: "https://github.com/mustapha-jaiteh/techingambia",
    website_link: "https://techgambia.netlify.app/",
  },
  {
    name: " BRAKDOWN ASSISTANCE",
    description:
      "The application provides users with the best possible solutions for their vehicle maintenance needs. It aims to reduce time and cost for the users to find mechanics during breakdowns.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: breakdown,
    source_code_link: "https://github.com/mustapha-jaiteh/orvba-fullstack",
    website_link: "",
  },

];

export { services, technologies, experiences, testimonials, projects };
