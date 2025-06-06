import React from "react";
// import amazon from "/amazon.webp";
import hubspot from "/hubspot.webp";
import meta from "/meta.webp";
import notion from "/notion.webp";
import zoom from "/zoom.webp";
import apple from "/apple.webp";

const Company = () => {
  const logos = [meta, apple, hubspot, notion, zoom];

  return (
    <div className="w-full overflow-hidden container py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-start sm:flex-row sm:items-center">
      {/* <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud Partner at <br />
        Seguel.
      </div> */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            className="mx-12 h-12 w-36 object-contain hover:grayscale-0 grayscale hover:opacity-100 opacity-70 transition-all"
            src={logo}
            alt="company logo"
          />
        ))}
        {/*  duplicate logos */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            className="mx-12 h-12 w-36 object-contain hover:grayscale-0 grayscale hover:opacity-100 opacity-70 transition-all"
            src={logo}
            alt="company logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
