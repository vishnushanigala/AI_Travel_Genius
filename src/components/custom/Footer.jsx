import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer({ footerRef }) {
  const socialIcons = [
    {
      name: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      name: "Linkedin",
      icon: <AiFillLinkedin />,
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
    },
    {
      name: "Mail",
      icon: <AiFillMail />,
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterCircle />,
    },
  ];
  return (
    <div
      ref={footerRef}
      className="footer w-full flex flex-col text-muted-foreground items-center justify-center md:p-4 py-2 border-t"
    >
      <p className="sm:font-semibold sm:text-lg  bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent">
        Made by CSE Department Batch 71
      </p>
      <div className="logos flex items-center justify-center gap-5 w-full">
        {socialIcons.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
      {/* <div className="more text-sm text-center mt-5 bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent">
      Honestly, I have no idea what's cooking here! If something’s broken or needs fixing, just ping me and save me from blissful ignorance!
      </div> */}
    </div>
  );
}

export default Footer;




