import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="flex items-center bg-gray-900 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Medilab</h1>
        <h2 className="text-2xl font-medium mb-6">
          We are a team of talented designers making websites with Bootstrap
        </h2>
        <a
          href="#about"
          className="btn-get-started bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
