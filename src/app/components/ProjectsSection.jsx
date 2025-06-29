"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 5,
    title: "Blossom Studio",
    description: "Built a responsive website for Blossom Studio using WordPress and Elementor.",
    image: "/images/projects/5.png",
    gitUrl: "https://divyachhabra.free.nf/",
    previewUrl: "https://divyachhabra.free.nf/home/",
  },
  {
    id: 4,
    title: "3D Solar System",
    description: "3D Solar System project built using Three.js",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/Divya-Chhabraa/solar-system",
    previewUrl: "https://solar-system-divya-chhabraas.vercel.app/",
  },
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Responsive developer portfolio built with Next.js and Tailwind CSS.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/Divya-Chhabraa/My-Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MERN Authentication App",
    description: "JWT-based authentication system with OTP email verification.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/Divya-Chhabraa",
    previewUrl: "https://mern-auth-frontend-divya-chhabraas.vercel.app/",
  },
  {
    id: 3,
    title: "CamConnect App",
    description: "Real-time video calling and chat app powered by WebRTC and MERN stack.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/Divya-Chhabraa/CC-Pages",
    previewUrl: "/",
    videoPath: "/videos/CamConnect.mp4", // ✅ Correct path
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20 px-4 xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
