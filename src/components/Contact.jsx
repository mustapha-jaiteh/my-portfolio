import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loarding, setLoarding] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChage = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoarding(true);
    //gM1nwoGfbiVWxdzoC
    //template_3qg1dxm
    //service_3sygso8
    emailjs
      .send(
        "service_3sygso8",
        "template_3qg1dxm",
        {
          from_name: form.name,
          to_name: "Mustapha Jaiteh",
          from_email: form.email,
          to_email: "jaitehm20@gmail.com",
          message: form.message,
        },
        "gM1nwoGfbiVWxdzoC"
      )
      .then(
        () => {
          setLoarding(false);
          setSubmitted(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        },
        (error) => {
          setLoarding(false);
          console.log(error);
        }
      );
  };

  return (
    <div className=" flex flex-col gap-10  overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch with me</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* left part */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-col  bg-black-100 p-8 rounded-2xl w-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 w-full "
          >
            {submitted && (
              <p className="text-green-600 bg-green-100 p-2 mb-4 text-center rounded fixed bottom-0 left-0 right-0">
                ✅ Thanks for contacting! <br /> I'll get back to you soon.
              </p>
            )}
            <h2 className="text-white font-bold mx-2">Send an email:</h2>
            {/* name */}
            <label htmlFor="name" className=" flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChage}
                className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none border-none focus:border-none font-medium"
              />
            </label>
            {/* email */}
            <label htmlFor="email" className=" flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChage}
                className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white  outline-none border-none focus:border-none font-medium"
              />
            </label>
            {/* message */}{" "}
            <label htmlFor="message" className=" flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                placeholder="Write your message here"
                value={form.message}
                onChange={handleChage}
                className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white  outline-none border-none focus:border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
            >
              {loarding ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        {/* right part */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-col  bg-black-100 p-8 rounded-2xl w-full"
        >
          <div className=" items-center justify-center md:items-start md:justify-start space-y-4 w-full  ">
            <h1 className="text-2xl text-gray-400 mt-8 ">
              Developed by: <br />
              <span className="font-bold font-mono text-2xl text-white">
                Mustapha Jaiteh, a junior software developer passionate about
                building accessible web apps and mobile apps that users love.
              </span>
            </h1>
            <h2 className="text-gray-400 text-2xl font-bold">Contact me at:</h2>

            <p className="flex items-center gap-2">
              <span className="text-gray-400">Email:</span> jaitehm20@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <span className="text-gray-400">Phone:</span> +220 3609991 / +220
              6667215
            </p>
            <a
              href="/CV/Mustapha_Jaiteh_CV.pdf"
              download
              className="flex items-center gap-2"
            >
              <span className="text-gray-400">My CV:</span>{" "}
              <ArrowDownTrayIcon className="w-10 h-10 bg-red-500 p-1 rounded-md" />
            </a>
          </div>
        </motion.div>
      </div>
      {/* footer */}
      <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
      <div className="relative z-10 flex gap-x-4 items-center justify-center h-9 p-1 rounded-md mt-4 mb-10 ">
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
  );
};

export default SectionWrapper(Contact, "contact");
