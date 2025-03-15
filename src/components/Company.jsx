import React from "react";

const Company = () => {
  // URLs for transparent PNG logos
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
  ];

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
