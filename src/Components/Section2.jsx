import React from "react";
import { motion } from "framer-motion";
import toyImage from "../assets/img14.jpg";

const Section2 = () => {
  return (
    <section className="relative py-20 bg-[#ffe6b0] dark:bg-gray-900 overflow-hidden transition-colors duration-500 my-2">
      {/* Decorative floating blobs */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#febf00]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#ff513a]/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4 relative z-10">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-500">
            Explore Our Best Toys
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-500 max-w-lg">
            Find a wide range of toys that spark creativity and joy. Perfect for
            kids of all ages and interests. Safe, fun, and educational!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#599a26] dark:bg-[#febf00] text-white dark:text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Browse Toys
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
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
              alt="Toy Showcase"
              className="relative w-full max-w-md rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
