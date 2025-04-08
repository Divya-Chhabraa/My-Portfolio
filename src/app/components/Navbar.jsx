"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo + Email + Location */}
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            DC
          </Link>

          <div className="hidden md:block h-8 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-60"></div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-1 md:mt-0">
            

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="text-xs md:text-sm text-white border border-transparent bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 p-[1px] rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span className="block bg-[#121212] rounded-xl px-3 py-1 hover:bg-opacity-80">
                📧 divyachhabra458@gmail.com
              </span>
            </a>

            <div className="hidden md:block h-8 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-60"></div>

            {/* Location */}
            <span className="text-xs md:text-sm text-white border border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[1px] rounded-full hover:scale-105 transition-transform duration-300">
              <span className="block bg-[#121212] rounded-xl px-3 py-1 hover:bg-opacity-80">
                📍 India
              </span>
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  Amritsar, Punjab
                </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Nav Links */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
