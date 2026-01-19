"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Hi, I’m Garvit Gupta";
  const typingSpeed = 80; // ms per character

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Full-Stack Software Engineer building end-to-end systems — from scalable
          backend APIs to clean, production-ready frontend applications.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-400 rounded-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
