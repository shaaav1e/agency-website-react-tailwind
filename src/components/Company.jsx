import React from "react";
import slack from "../assets/slack.png";
import woocommerce from "../assets/woocommerce.png";
import amazon from "../assets/amazon.png";
import sitepoint from "../assets/sitepoint.png";
import meundies from "../assets/meundies.png";

const Company = () => {
  const logos = [slack, woocommerce, amazon, sitepoint, meundies];
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
            className="mx-12 h-8 w-36 object-contain hover:grayscale-100 hover:opacity-100 transition-all"
            src={logo}
            alt="company logo"
          />
        ))}
        {/*  duplicate logos */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            className="mx-12 h-8 w-36 object-contain hover:grayscale-100 hover:opacity-100 transition-all"
            src={logo}
            alt="company logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
