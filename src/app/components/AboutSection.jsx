"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-4">
        {[
          "Java",
          "React.js",
          "Node.js",
          "Express.js",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "Postman",
          "Git & GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 text-white rounded-md shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="relative flex flex-col gap-6 ml-4 border-l border-purple-600 pl-6">
        {[
          {
            title: "B.Tech Computer Science and Engineering",
            place: "Amritsar Group of Colleges, IKGPTU, Punjab | 2022 - Present",
            year: "SGPA : 8.86",
          },
          {
            title: "Senior Secondary Education",
            place: "Manav Public School, Amritsar, Punjab | 2021 - 2022",
            year: "Score : 90%",
          },
          {
            title: "Secondary Education",
            place: "Manav Public School, Amritsar, Punjab | 2019 - 2020",
            year: "Score : 93%",
          },
        ].map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-white"></div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg shadow-md text-white">
              <h4 className="font-semibold text-lg">{edu.title}</h4>
              <p className="text-sm">{edu.place}</p>
              <span className="text-xs opacity-80">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-wrap gap-4">
        {[
          {
            name: "NPTEL: C Programming",
          },
          {
            name: "NPTEL: Theory of Computation",
          },
          {
            name: "NPTEL: Software Engineering",
          },
          {
            name: "Udemy: MERN Stack Web Development (2024)",
          },
        ].map((cert) => (
          <div
            key={cert.name}
            className="px-4 py-2 text-white rounded-md shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            {cert.name}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <div className="flex flex-wrap gap-4">
        {[
          "Communication",
          "Teamwork",
          "Problem-Solving",
          "Time Management",
          "Leadership",
        ].map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 text-white rounded-md shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I’m a Computer Science undergraduate and an aspiring full stack developer with hands-on experience in the MERN stack. I enjoy exploring how technology can solve real-world problems and am constantly working on sharpening my development skills through projects and continuous learning.
            <br /><br />
            Apart from tech, I bring strong communication and public speaking skills to the table, with experience in anchoring and team collaborations. It’s where I truly feel in my element — constantly learning, steadily growing, and always ready for the next exciting challenge.
          </p>
          <div className="flex flex-row justify-start mt-4">
          <div className="flex flex-wrap gap-4 mt-2">
  <TabButton
    selectTab={() => handleTabChange("skills")}
    active={tab === "skills"}
  >
    Skills
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("education")}
    active={tab === "education"}
  >
    Education
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("certifications")}
    active={tab === "certifications"}
  >
    Certifications
  </TabButton>
  <TabButton
  selectTab={() => handleTabChange("softskills")}
  active={tab === "softskills"}
>
  Soft Skills
</TabButton>
</div>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
