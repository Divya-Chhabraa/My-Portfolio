"use client";
import React, { useEffect, useState } from "react";

const currentWork = [
  {
    title: "MERN Authentication App",
    description:
      "JWT-based login/signup system with OTP email verification. Using Vite, Tailwind, and Node.js.",
  },
  {
    title: "Exploring TailwindCss",
    description:
      "Exploring real-time video and chat features for peer-to-peer connections using WebRTC.",
  },
  {
    title: "Strengthening DSA in Java",
    description:
      "Revising core data structures and algorithms via Scaler’s Java DSA course.",
  },
];

const CurrentlyWorkingOn = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300); // delay for transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-25 py-8 px-4 xl:px-16 bg-[#121212] text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Currently Working On
      </h2>

      <div
        className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentWork.map((item, index) => (
          <div
            key={index}
            className="border border-[#33353F] rounded-lg p-6 bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {item.title}
            </h3>
            <p className="text-[#ADB7BE] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
