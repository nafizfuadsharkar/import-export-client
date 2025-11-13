import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toyImage from "../assets/img11.jpg";

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 150,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-gray-50 my-2 py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-4">
        <div
          className="flex-1 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to ToyKids
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the best toys for your kids. Safe, fun, and educational toys
            delivered right to your doorstep!
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        <div
          className="flex-1"
          data-aos="fade-left"
        >
          <img
            src={toyImage}
            alt="Toy"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
