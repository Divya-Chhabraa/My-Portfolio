"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const quotes = [
    "Code. Create. Repeat.",
    "Designing ideas, debugging life.",
    "Tech with a touch of personality.",
    "Crafted with care — and lots of Tea ☕"
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="footer border-t border-t-[#33353F] text-white z-10 relative py-8">
      <div className="container mx-auto px-4 relative flex justify-between items-center">
        {/* Left: Logo */}
        <div className="font-bold text-lg">DC</div>

        {/* Right: Copyright */}
        <div className="text-slate-600 text-sm">&copy; {year} All rights reserved.</div>
      </div>

      {/* Center: Absolutely centered quote */}
      <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-slate-500 italic text-center px-4">
        {quote}
      </p>
    </footer>
  );
};

export default Footer;
