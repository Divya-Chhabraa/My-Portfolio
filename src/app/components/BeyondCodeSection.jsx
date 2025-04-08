"use client";
import React from "react";
import { motion } from "framer-motion";

const beyondCodeData = [
  {
    title: "Newsletter Design",
    description:
      "Created the CSE department newsletter using Canva with focus on layout, clarity, and visual balance.",
  },
  {
    title: "Anchoring & Public Speaking",
    description:
      "Anchored college events and won zonal-level debates with strong stage presence and articulation.",
  },
  {
    title: "Mock Campus Winner",
    description:
      "Secured 1st place twice in mock placements, acing both technical and HR rounds.",
  },
];

const BeyondCodeSection = () => {
  return (
    <section className="py-20 bg-[#121212] text-white w-full" id="beyond-code">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
        <h2 className="text-4xl font-bold mb-12 text-center mt-8">Beyond Code</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {beyondCodeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#181818] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {item.title}
              </h3>
              <p className="text-[#adb7be] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
