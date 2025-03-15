import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="container flex flex-col md:flex-row justify-between gap-8 items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
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
      <div className="w-full md:w-1/2 relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Modern empty office with workstations and city view"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-bold">Innovative Solutions</p>
          <p className="text-sm">For Modern Businesses</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
