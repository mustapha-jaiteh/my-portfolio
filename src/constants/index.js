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
  audio,
  breakdown,
  fashion,
  space,
  mood,
  techgam,
  threejs,
  nextjs,
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
    title: "HTML 5 & CSS 3",
    icon: web,
  },
  {
    title: "JavaScript & TypeScript",
    icon: mobile,
  },
  {
    title: "React JS & Next JS",
    icon: backend,
  },
  {
    title: "Tailwind CSS, Git & GitHub",
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
];

const experiences = [
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
    icon: "",
    iconBg: "#E6DEDD",
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
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "INTERNATIONAL OPEN UNIVERSITY",
    company_name: "Certificate in (IC3)",
    icon: iou,
    iconBg: "#E6DEDD",
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
    iconBg: "#E6DEDD",
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
    iconBg: "#E6DEDD",
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
  {
    name: "AUDIO DEVICES STORE",
    description:
      "It's a web app frontend developed with Reat.js and Tailwind CSS , the user can see products with their details and can place an order through a shopping cart.",
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
    image: audio,
    source_code_link: "https://github.com/mustapha-jaiteh/audio-devices",
    website_link: "https://audio-devices.netlify.app/",
  },
  {
    name: "SPACE TOURISM WEBSITE",
    description:
      "It's a website for space travellers. it displays the destination planets and the distance between each planet and the Earth. the space crew and the technologies",
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
    image: space,
    source_code_link: "https://github.com/mustapha-jaiteh/mustik-space",
    website_link: "https://mustik-space.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
