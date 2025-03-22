import React from "react";
import landingpage1 from "../assets/images/landing-page-1.jpeg";
import landingpage2 from "../assets/images/landing-page-2.jpeg";
import meerath1 from "../assets/images/meerath-1.jpeg";
import meerath2 from "../assets/images/meerath-2.jpeg";
import orvbad1 from "../assets/images/or-desk-1.jpeg";
import orvbad2 from "../assets/images/or-desk-2.jpeg";
import orvbam1 from "../assets/images/or-mobile-1.jpeg";
import orvbam2 from "../assets/images/or-mobile-2.jpeg";
import opdesk1 from "../assets/images/op-desk-1.jpeg";
import opdesk2 from "../assets/images/op-desk-2.jpeg";
import opmobile1 from "../assets/images/op-mobile-1.jpeg";
import opmobile2 from "../assets/images/op-mobile-2.jpeg";
import stdesk1 from "../assets/images/st-desk-1.jpeg";
import stdesk2 from "../assets/images/st-desk-2.jpeg";
import stmobile1 from "../assets/images/st-mobile-1.jpeg";
import stmobile2 from "../assets/images/st-mobile-2.jpeg";
import techgamdesk1 from "../assets/images/techgam-desk-1.jpeg";
import techgamdesk2 from "../assets/images/techgam-desk-2.jpeg";
import techgammobile1 from "../assets/images/techgam-mobile-1.jpeg";
import techgammobile2 from "../assets/images/techgam-mobile-2.jpeg";

const Projects = () => {
  const projects = [
    //IT companies derectory website
    {
      img_desktop_1: techgamdesk1,
      img_desktop_2: techgamdesk2,
      img_mobile_1: techgammobile1,
      img_mobile_2: techgammobile2,
      title: "IT COMPANIES DIRECTORY WEBSITE ",
      description:
        "TECH IN GAMBIA is the ultimate directory for IT companies in The Gambia. the website helps users discover and connect with tech companies, including software firms, ISPs, and GSM providers. ",
    },
    // Orvba fullstack
    {
      img_desktop_1: orvbad1,
      img_desktop_2: orvbad2,
      img_mobile_1: orvbam1,
      img_mobile_2: orvbam2,
      title: "VEHICLE BREAKDOWN ASSISTANCE APP",
      description:
        "It's a fullstack web application, frontend with React.js and Tailwind CSS, and backend with PHP Laravel.The application is designed to provide the users with the best possible solutions for their vehicle maintenance needs. It aims to reduce time and cost for the users to find mechanics during breakdowns. the data shown here is a temporary sample data, No backend yet ",
    },
    // audio devices
    {
      img_desktop_1: opdesk1,
      img_desktop_2: opdesk2,
      img_mobile_1: opmobile1,
      img_mobile_2: opmobile2,
      title: "AUDIO DEVICES E-COMERCE APP ",
      description:
        "It's a web app frontend developed with Reat.js and Tailwind CSS , the user can see products with their details and can place an order through a shopping cart. the data shown here is a temporary sample data, No backend yet.",
    },
    // space tourism websire
    {
      img_desktop_1: stdesk1,
      img_desktop_2: stdesk2,
      img_mobile_1: stmobile1,
      img_mobile_2: stmobile2,
      title: "SPACE TOURSIM WEBSITE ",
      description:
        "It's a website for space travellers. it displays the destination planets and the distance between each planet and the Earth. the space crew and the technologies",
    },
    // inheritance android app
    {
      img_desktop_1: meerath1,
      img_desktop_2: meerath2,
      img_mobile_1: meerath1,
      img_mobile_2: meerath2,
      title: "ISLAMIC INHERITANCE ANDROID APP",
      description:
        "It's a simple mobile app that calculates Islamic inheritance. It has both Arabic and English languages. The user can select hte names of available inheritors in a particular case, and enter the amount to be shared. the result will display each person with their due share from the money",
    },
    // landing page and mobile shop
    {
      img_desktop_1: landingpage1,
      img_desktop_2: landingpage2,
      img_mobile_1: landingpage1,
      img_mobile_2: landingpage2,
      title: "LANDING PAGE",
      description:
        "It's a personal blog site that is build with only HTML, CSS and JAVASCRIPT",
    },
  ];
  //   const cards = Projects.map((item, index) => {
  //     return;
  //     key = { index };
  //      title={ item. };
  //   });
  return (
    <div>
      <h1 className="text-6xl font-bold mt-20">Projects</h1>

      {projects.map((item, index) => (
        <>
          <div className="container inline-block w-full h-auto ">
            <h2
              key={index}
              className="  text-2xl mt-8 font-mono font-extrabold"
            >
              {item.title}
            </h2>
            <p className="  w-3/4 text-sm mt-1 font-mono font-extrabold">
              {item.description}
            </p>

            <div className="cards flex-wrap mt-5 w-full h-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {/* image one */}
              <picture className=" border-2 border-gray-500 rounded-md">
                {/* source for larger screen */}
                <source
                  srcSet={item.img_desktop_1}
                  media="(min-width: 1024px)"
                  className="w-full h-full"
                />
                {/* source for medium screen */}
                <source
                  srcSet={item.img_desktop_1}
                  media="(min-width: 768px)"
                  className="w-full h-full"
                />
                {/* source for smaller screen */}
                <source
                  srcSet={item.img_mobile_1}
                  media="(min-width: 767px)"
                  className="w-full h-full"
                />
                {/* default source */}
                <img
                  className="inline-block w-full h-[400px] lg:h-[350px] "
                  src={item.img_mobile_1}
                  alt="image-1"
                />
              </picture>
              {/* image two */}
              <picture className=" border-2 border-gray-500 rounded-md">
                {/* source for larger screen */}
                <source
                  srcSet={item.img_desktop_2}
                  media="(min-width: 1024px)"
                  className="w-full h-full"
                />
                {/* source for medium screen */}
                <source
                  srcSet={item.img_desktop_2}
                  media="(min-width: 768px)"
                  className="w-full h-full"
                />
                {/* source for smaller screen */}
                <source
                  srcSet={item.img_mobile_2}
                  media="(min-width: 767px)"
                  className="w-full h-full"
                />
                {/* default source */}
                <img
                  className="inline-block w-full h-[400px] lg:h-[350px] "
                  src={item.img_mobile_2}
                  alt="image-1"
                />
              </picture>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Projects;
