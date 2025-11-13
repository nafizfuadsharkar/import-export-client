import React from "react";
import { motion } from "framer-motion";
import toyImage from "../assets/img11.jpg";

const Section1 = () => {
  return (
    <section className="relative py-20 bg-[#ffe6b0] dark:bg-gray-900 overflow-hidden transition-colors duration-500 my-4 rounded-2xl">
      {/* Decorative floating blobs */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#febf00]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#ff513a]/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4 relative z-10">
        {/* Left Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-500">
            Welcome to <span className="text-[#febf00] dark:text-[#599a26]">Imex Port</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg transition-colors duration-500">
            Discover the best toys for your kids. Safe, fun, and educational toys delivered right to your doorstep!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary dark:bg-[#febf00] text-white dark:text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[300px] h-[300px] bg-gradient-to-tr from-[#febf00]/40 to-[#ff513a]/30 rounded-full blur-3xl"></div>
            </div>
            <img
              src={toyImage}
              alt="Toy"
              className="relative w-full max-w-sm rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700 object-cover transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
