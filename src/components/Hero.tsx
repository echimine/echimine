import React from 'react';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden ">
      {/* VIDEO EN FOND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        id="video"
      >
        <source
          src="/video/Edit_Aestetique_Thrawn_Empire_Fini_Q_E.mp4"
          type="video/mp4"
        />
      </video>

      {/* MASQUE SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="50%"
              fontSize="300"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Archivo, sans-serif"
              fontWeight="900"
            >
              ECHIMINE
            </text>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="white" mask="url(#text-mask)" />
      </svg>
      <div className="absolute bottom-30 w-full flex flex-col items-center gap-10 z-20">
        <h2 className="font-archivo text-center">
          Editeur français de films et séries depuis 2022
        </h2>
        <div>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
