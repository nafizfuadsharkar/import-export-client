import React from "react";
import aboutImage from "../assets/img5.jpg";
import DynamicTitle from "./DynamicTitle";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 my-2">
        <DynamicTitle title="About"></DynamicTitle>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About ToyKids
          </h2>
          <p className="text-gray-600 mb-6">
            At ToyKids, we believe every child deserves a world full of fun and
            learning. Our toys are carefully selected to spark creativity, enhance
            imagination, and bring joy to children of all ages. From educational
            puzzles to creative building blocks, we provide a safe and exciting
            environment for kids to explore and learn through play.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About ToyKids"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
