import React from "react";

const Hero = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-between gap-8 items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Left Col */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* hero title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
          Your
          <br />
          search <span className="text-blue-500">Ends</span> here
        </h1>
        <p className="font-medium">
          Pixels is a full-service software development company.
        </p>
        {/* star badge */}
        <div className="flex items-center gap-2 bg-blue-500 text-white w-fit px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 transition-colors duration-300 group cursor-pointer">
          <span className="group-hover:scale-110 group-hover:rotate-60 transition-transform">
            <i className="ri-asterisk"></i>
          </span>
          <span className="text-sm font-medium group-hover:underline">
            Book a free consultation call
          </span>
        </div>
      </div>
      {/* Right Col */}
      <div className="w-full md:w-1/2">
        <img src="/src/assets/hero-image.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
