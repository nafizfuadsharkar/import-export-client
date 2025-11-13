import React from "react";
import aboutImage from "../assets/img5.jpg";
import DynamicTitle from "./DynamicTitle";

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 my-4 transition-colors duration-500">
      <DynamicTitle title="About" />
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight">
            About ToyKids
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
            At <span className="font-semibold text-primary dark:text-indigo-400">ToyKids</span>, we believe every child deserves a world full of fun and learning. 
            Our toys are carefully selected to spark creativity, enhance imagination, and bring joy to children of all ages. 
            From educational puzzles to creative building blocks, we provide a safe and exciting environment for kids to explore and learn through play.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group">
            <img
              src={aboutImage}
              alt="About ToyKids"
              className="w-full max-w-md rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay for Style */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/20 via-blue-400/20 to-pink-400/20 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
