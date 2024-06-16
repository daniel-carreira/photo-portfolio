import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 text-xl">
        <li>
          <a
            href="https://www.instagram.com/_danielcarreira_/"
            target="_blank_"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danielcarreira/"
            target="_blank_"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
