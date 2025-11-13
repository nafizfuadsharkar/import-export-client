import React from "react";
import toyImage from "../assets/img14.jpg";
const Section2 = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        

        <div className="flex-1">
          <img
            src={toyImage}
            alt="Toy Showcase"
            className="w-full max-w-md rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Best Toys
          </h2>
          <p className="text-gray-600 mb-6">
            Find a wide range of toys that spark creativity and joy. Perfect for
            kids of all ages and interests.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Browse Toys
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
