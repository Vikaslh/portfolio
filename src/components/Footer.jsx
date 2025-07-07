import React from "react";

export const Footer = () => (
  <footer className="w-full py-6 bg-black border-t border-white/10 text-center text-gray-400 text-sm mt-8">
    <div className="flex flex-col items-center gap-2">
      <span>
        &copy; {new Date().getFullYear()} Vikas L H. All rights reserved.
      </span>
      <div className="flex gap-4 justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          View Resume
        </a>
        <a
          href="https://www.linkedin.com/in/vikas-lh-31754a295/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Vikaslh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
); 