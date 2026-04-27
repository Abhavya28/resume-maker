"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const words = [
  "an interview.",
  "hired faster.",
  "your dream job.",
  "paid more.",
  "noticed."
];

const LandingPage = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text !== currentWord) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 90);
    } else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text !== "") {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 60);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-6">
      
      <div className="max-w-4xl text-center flex flex-col items-center">
        
        <span className="mb-4 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
          Free Resume Builder
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Build resumes that get you
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-blue-500 italic mt-2 h-[60px]">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-xl text-lg">
          Create clean, professional resumes in minutes and stand out from thousands of applicants.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/create"
            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          No signup required • Instant download
        </p>

      </div>
    </section>
  );
};

export default LandingPage;