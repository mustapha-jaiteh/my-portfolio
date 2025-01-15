import IconFrontendMentor from "./assets/images/icon-frontend-mentor.svg";
import IconGithHub from "./assets/images/icon-github.svg";
import IconLinkedin from "./assets/images/icon-linkedin.svg";
import IconTwitter from "./assets/images/icon-twitter.svg";
import BorderBottom from "./components/BorderBottom";
import Icon from "./components/Icon";

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
      skill: " CORE JAVA",
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
    <div className="bg-slate-950 container mx-auto">
      <header className="relative max-w-6xl mx-10 text-gray-50 ">
        <div className="navbar py-2 px-1 flex  justify-between items-center z-10">
          <span className=""> Akhi Mustik</span>
          <div className="relative z-10 flex gap-x-4 items-center bg-black h-9 p-1 rounded-md">
            <Icon image={IconGithHub} alt="GitHub Icon" />
            <Icon image={IconFrontendMentor} alt="Frontend Mentor Icon" />
            <Icon image={IconLinkedin} alt="Linkedin Icon" />
            <Icon image={IconTwitter} alt="Twitter Icon" />
          </div>
        </div>

        <div className="hero-content py-8 px-6 flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:items-start lg:justify-normal lg:text-start ">
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

      <main className="bg-slate-950 relative max-w-6xl mx-10 text-gray-50 mt-20  p-4">
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

        {/* <form
          action="#"
          className="form right-0 ml-[300px] mt-5 w-[426px] h-[400px] bg-gray-800 p-16 pb-0 rounded-md"
        >
          <input
            type="text"
            placeholder="NAME"
            className=" Name bg-gray-800 -bottom-1 h-[50px] p-3 w-full "
          />
          <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-0"></div>
          <input
            type="text"
            placeholder="EMAIL"
            className=" Email bg-gray-800 -bottom-1 h-[50px] p-3 w-full mt-10"
          />
          <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-0"></div>
          <input
            type="text"
            placeholder="MESSAGE"
            className=" Message bg-gray-800  h-[50px] p-3 w-full mt-10"
          />
          <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mb-10"></div>
          <div className="mt-0 ml-[60%]">
            <a
              href="#"
              className="inline-block relative  text-xs font-bold tracking-wider mb-16 text-gray-50"
            >
              SEND MESSAGE
              <BorderBottom bottom="-bottom-1 h-px" />
            </a>
          </div>
        </form> */}
        <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
        <div className="relative z-10 flex gap-x-4 items-center justify-center h-9 p-1 rounded-md mt-4 mb-10 ">
          <Icon image={IconGithHub} alt="GitHub Icon" />
          <Icon image={IconFrontendMentor} alt="Frontend Mentor Icon" />
          <Icon image={IconLinkedin} alt="Linkedin Icon" />
          <Icon image={IconTwitter} alt="Twitter Icon" />
        </div>
      </footer>
    </div>
  );
}

export default App;
