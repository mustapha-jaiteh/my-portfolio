import IconFrontendMentor from "./assets/images/icon-frontend-mentor.svg";
import IconGithHub from "./assets/images/icon-github.svg";
import IconLinkedin from "./assets/images/icon-linkedin.svg";
import IconTwitter from "./assets/images/icon-twitter.svg";
import BorderBottom from "./components/BorderBottom";
import Icon from "./components/Icon";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

import mustik from "./assets/images/mustik.jpeg";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const mySkills = [
    {
      skill: "HTML, CSS, JAVASCRIPT",
      experience: "2 years experience",
    },
    {
      skill: "REACT JS, TAILWIND CSS",
      experience: "6 months experience",
    },
    {
      skill: "PHP LARAVEL BASICS",
      experience: "4 months experience",
    },
    {
      skill: " CORE JAVA, ANDROID BASICS",
      experience: "2 years experience",
    },
    {
      skill: "JAVA ANDROID BASICS ",
      experience: "2 years experience",
    },

    {
      skill: "PHOTOSHOP GRAPHIC DESIGN",
      experience: "2 years experience",
    },

    {
      skill: "NETWORKING FUNDAMENTALS",
      experience: "Basic skills in Network configuration and CCTV instalation",
    },
  ];
  const skills = mySkills.map((item, index) => {
    return <Skills key={index} {...item} />;
  });
  return (
    <div className="bg-slate-950 max-w-screen-lg mx-auto">
      <header className="relative max-w-6xl mx-6 text-gray-50 ">
        <div className="navbar py-2 px-1 flex  justify-between items-center z-10">
          <span className=""> Akhi Mustik</span>
          <div className="relative z-10 flex gap-x-4 items-center bg-black h-9 p-1 rounded-md">
            {/* <Icon image={IconGithHub} alt="GitHub Icon" />
            <Icon image={IconFrontendMentor} alt="Frontend Mentor Icon" />
            <Icon image={IconLinkedin} alt="Linkedin Icon" />
            <Icon image={IconTwitter} alt="Twitter Icon" /> */}
            <a
              href="https://github.com/mustapha-jaiteh"
              className="text-gray-400 text-3xl hover:text-gray-600"
            >
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 " />
            </a>
            <a
              href="https://www.linkedin.com/in/mustapha-jaiteh-a61513278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-900"
            >
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://wa.me/2203609991?text=Hi%20Mustik,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-3x hover:text-green-800 "
            >
              <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 " />
            </a>
          </div>
        </div>

        <div className="hero-content py-8 px-4 flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:items-start lg:justify-normal lg:text-start ">
          <div className="my-4 w-full lg:w-[80%] mr-0 lg:mr-12">
            <h1 className="text-6xl font-bold ">
              Nice to meet you!
              <br />
              I'm{" "}
              <span className="relative">
                Mustapha Jaiteh
                {/* <BorderBottom /> */}
              </span>
              .
            </h1>

            <p className="mt-8 w-full text-sm font-mono ">
              {" "}
              Based in the Gambia, I'm a junior software developer passionate
              about building accessible web apps and mobile apps that users
              love. I am a graduate with BScIT degree. I have strong skills in
              Frontend, I am currently on a roadmap to becoming a Fullstack
              developer, learning the technologies of Backend and Mobile App
              development.
            </p>

            <div className="mt-10 flex flex-col">
              <p className="inline-block relative text-xs font-bold tracking-wider mb-8">
                Contact: +220 3609991
                <BorderBottom bottom="-bottom-1 h-px w-full lg:w-[26%]" />
              </p>
              <p className="inline-block relative text-xs font-bold tracking-wider mb-16">
                Email: jaitehm20@gmail.com
                <BorderBottom bottom="-bottom-1 h-px w-full lg:w-[33%]" />
              </p>
              <a
                href="/CV/Mustapha_Jaiteh_CV2.pdf"
                download
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded w-48 hover:bg-green-700 transition duration-200 place-self-center lg:place-self-start"
              >
                Download My CV
              </a>
            </div>
          </div>
          {/* image part */}
          <div className="profile-photo  w-[310px]  ">
            <img
              className="w-63 rounded-md"
              src={mustik}
              alt="Profile Photo bg-transparent"
            />
          </div>
        </div>
        <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
      </header>

      <main className="bg-slate-950 relative max-w-6xl mx-4 lg:mx-10 text-gray-50 mt-20  p-4">
        <div className="skills  ">
          <h1 className="text-6xl font-bold ">Skills</h1>
          <div className="">{skills}</div>
        </div>
        <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
        <Projects />
      </main>
      <footer className="bg-gray-900 relative w-auto text-gray-50 mt-20 p-2">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl font-bold mt-8 ">
            Source code is available on my github:
          </h1>
          <a
            href="https://github.com/mustapha-jaiteh"
            className="inline-block relative text-xs font-bold tracking-wider mb-16"
          >
            https://github.com/mustapha-jaiteh
            <BorderBottom bottom="-bottom-1 h-px w-full " />
          </a>
        </div>
        <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
        <div className="relative z-10 flex gap-x-4 items-center justify-center h-9 p-1 rounded-md mt-4 mb-10 ">
          {/* <Icon image={IconGithHub} alt="GitHub Icon" />
          <Icon image={IconFrontendMentor} alt="Frontend Mentor Icon" />
          <Icon image={IconLinkedin} alt="Linkedin Icon" />
          <Icon image={IconTwitter} alt="Twitter Icon" /> */}
          <a
            href="https://github.com/mustapha-jaiteh"
            className="text-gray-400 text-3xl hover:text-gray-600"
          >
            <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mustapha-jaiteh-a61513278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl hover:text-blue-900"
          >
            <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>

          <a
            href="https://wa.me/2203609991?text=Hi%20Mustik,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-3x hover:text-green-800 "
          >
            <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 " />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
