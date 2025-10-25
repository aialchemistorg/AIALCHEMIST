"use client";

import Image from "next/image";
import type React from "react";

type TeamCardProps = {
  imgSrc: string;
  name: string;
  role: string;
  quote: string;
  social: { linkedin: string; twitter: string; github: string };
};

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, role, quote, social }) => {
  return (
    <div
      className="
        group relative w-72 h-[380px] shrink-0 rounded-3xl 
        overflow-hidden border border-white/10 
        bg-gradient-to-br from-white/5 via-white/2 to-white/5
        backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.05)]
        transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(255,0,80,0.25)]
      "
    >
      {/* Image Section */}
      <div className="relative w-full h-[250px] overflow-hidden rounded-t-2xl">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="
      object-cover object-top
      transition-transform duration-700
      group-hover:scale-110 group-hover:rotate-1
    "
        />
        {/* Gradient overlay - reversed for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>


      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pt-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent pt-20">
          {name}
        </h3>
        <p className="text-xs text-red-400 font-medium">{role}</p>
        <p className="text-gray-300 text-sm italic mt-2 line-clamp-2">“{quote}”</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            {[
              {
                href: social.linkedin,
                icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
              },
              {
                href: social.twitter,
                icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z",
              },
              {
                href: social.github,
                icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-8 w-8 flex items-center justify-center rounded-full 
                  bg-gradient-to-br from-red-700/40 via-red-600/30 to-red-400/40 
                  text-red-300 hover:text-white transition-all duration-300 
                  hover:shadow-[0_0_10px_rgba(255,0,80,0.4)] hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>

          <button className="
            text-xs font-semibold text-white px-3 py-1.5 rounded-full 
            bg-gradient-to-r from-red-600 to-pink-500 
            hover:from-pink-500 hover:to-red-400 
            transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.4)]
          ">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
