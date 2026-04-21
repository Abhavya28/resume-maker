"use client"

import { useEffect, useState } from "react";
import Button from "./button";
import Link from "next/link";

const words = [
  "an interview",
  "hired faster.",
  "a remote job.",
  "paid more.",
  "promoted."
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
    }

    else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    }

    else if (isDeleting && text !== "") {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 60);
    }

    else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 200); // 👈 IMPORTANT FIX
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-darkText font-sans antialiased">
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 text-center">

        <div className="max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-5xl leading-tight md:text-5xl font-bold max-w-2xl mb-5 text-gray-800">
            Build resumes that get you
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold text-blue-400 max-w-2xl mb-8 italic">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-gray-600 max-w-lg mb-12 text-xl">
            Stand out from thousands of applicants with a resume that recruiters actually notice.
          </p>

          <div className="flex items-center gap-4 mb-24">
            <Button>
              <Link href="/create">
                Get started
              </Link>
            </Button>
          </div>


        </div>
      </section>
    </div>
  );
};

export default LandingPage;