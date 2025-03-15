import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { work_experience } from "./data";
class Education extends Component {
  render() {
    return (
      <div
        data-aos="fade-up"
        id="work_ex"
        className="mt-[50px] mx-[20px] md:mt-[120px] flex flex-col justify-center "
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
            WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="md:pb-[50px] pb-[40px] mx-auto px-[25px] bg-transparent rounded-[50px] shadow-xl md:w-[1039px] ">
          <div className="text-center">
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="">
            <div>{ExperienceTimeline(work_experience)}</div>
          </div>
        </div>
      </div>
    );
  }
}

function render_work(education) {
  return education.map((education) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        key={education.label}
        className=" md:p-[20px] md:pb-0 md:mb-[1px] md:flex"
      >
        <div className="w-full md:p-[45px] hover:shadow-lg duration-300 p-[10px] md:pt-[30px] rounded-[45px] md:h-[200px] bg-slate-100 text-[black] flex flex-col md:flex-row">
          <div className="text-center flex flex-col md:w-3/4 m-auto">
            <p className="font-bold text-[25px]"> {education.label} </p>

            <span className=" mt-[15px] text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
              {education.responsibility}
            </span>
          </div>

          <div className="w-full mt-[15px] md:mt-[0px] text-center">
            <img
              className="w-[320px] mx-auto"
              src={`img/${education.pic}` + ".webp"}
            ></img>
            <span className=" text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ">
              ({education.year})
            </span>
          </div>
        </div>
      </div>
    );
  });
}

function ExperienceTimeline(experiences) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-8 overflow-y-auto">
      {/* Intro Section */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-xl mb-6">
          I'm a Software Engineer fueled by a passion for exploring all things
          innovative, crafting solutions that captivate and inspire. With an
          insatiable curiosity for knowledge, I thrive on creating experiences
          that connect technology and people in meaningful ways.
        </p>
        <p className="text-lg mb-8">
          With expertise in software engineering, I weave together technical
          skills and a boundless interest in every detail, driven by a hunger
          for learning. I’m passionate about communication and building
          communities, blending code and creativity to deliver impactful,
          unforgettable digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="font-bold mb-2">Background</h3>
            <p>
              Software engineer with a passion for learning and tackling new
              tech.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg p-6 text-white">
            <h3 className="font-bold mb-2">Approach</h3>
            <p>
              Blending tech skills with a love for community and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-12 max-w-2xl mx-auto animate-on-scroll">
        <h3 className="text-xl font-bold mb-6 text-center">
          Experience Timeline
        </h3>
        <div className="relative border-l-2 border-[#1e1e1e] pl-8 ml-4 space-y-10">
          {experiences.map((exp, index) => (
            <div className="relative" key={`${exp.label}-${exp.year}-${index}`}>
              <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-[#1e1e1e] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <div className="text-sm text-slate-500 font-bold mb-1">
                {exp.year}
              </div>
              <div className="font-bold text-lg">{exp.responsibility}</div>
              <div className="text-gray-600 dark:text-gray-300 mb-1">
                {exp.label}
              </div>
              <div className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <img
                  className="w-12 h-12 object-contain"
                  src={`img/${exp.pic}.webp`}
                  alt={`${exp.label} logo`}
                />
                <span>{exp.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
