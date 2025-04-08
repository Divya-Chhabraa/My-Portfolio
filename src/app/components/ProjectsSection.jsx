"use client";
import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Project Image */}
      <Image
        src={imgUrl}
        alt={title}
        width={600}
        height={300}
        className="w-full h-60 object-cover"
      />

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#ADB7BE] text-sm mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white bg-gradient-to-br from-primary-500 to-secondary-500 px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white bg-[#2e2e2e] px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            GitHub <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
