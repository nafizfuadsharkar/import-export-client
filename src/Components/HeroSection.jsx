import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import heroImg from "../assets/img15.jpg"; // replace with your image path

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Side */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Streamline Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Import & Export
            </span>{" "}
            Operations
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Simplify product management, automate tracking, and accelerate
            trade decisions — all through one intelligent global platform.
          </p>

          {/* Search Bar */}
          <motion.div
            className="relative mt-6 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Search products, suppliers or categories..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none shadow-md transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -z-10 w-[450px] h-[450px] bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40"></div>
          <img
            src={heroImg}
            alt="Import Export Illustration"
            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
