import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Handle body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    {
      label: "Home",
      href: "#home",
    },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
  ];
  return (
    <nav
      ref={navRef}
      className="container rounded-full mt-4 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-2xl shadow-blue-500 max-w-7xl hover:bg-blue-500 hover:shadow-2xl group transition-colors duration-300"
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          {/* <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity duration-300"></div> */}
          <h1 className="text-2xl font-bold text-blue-600 group-hover:text-white shadow-2xl shadow-slate-500 transition-colors duration-300">
            Pixels.
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 transition-colors duration-300 ${
                activeLink === link.href
                  ? "text-blue-600 group-hover:text-white after:w-full"
                  : "text-gray-600 group-hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Get in touch button */}
        <button className="hidden md:block bg-blue-600 font-bold shadow-2xl shadow-blue-500 text-white px-6 py-2 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
          Login
        </button>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? (
            <i className="ri-close-large-line"></i>
          ) : (
            <i className="ri-menu-5-fill"></i>
          )}
        </button>
        {/* Mobile Nav items */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-64 bg-white shadow-lg rounded-b-2xl z-40">
            <div className="flex flex-col items-start p-6 gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-base font-medium ${
                    activeLink === link.href ? "text-blue-600" : ""
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <button className=" bg-blue-600 font-bold shadow-2xl shadow-blue-500 text-white px-6 py-2 rounded-full hover:text-blue-600 hover:bg-white transition-colors duration-300 w-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
