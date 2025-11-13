import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import heroImg from "../assets/img15.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9ec] via-[#fff4d6] to-[#ffe6b0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#febf00]/30 dark:bg-[#febf00]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#ff513a]/20 dark:bg-[#ff513a]/10 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Manage Your{" "}
            <span className="text-[#febf00] dark:text-[#ffe066] drop-shadow-sm">Imports</span> &{" "}
            <span className="text-[#ff513a] dark:text-[#ff8266] drop-shadow-sm">Exports</span>{" "}
            with Ease
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            A modern platform for global trade — track shipments, handle products, and
            monitor insights in real-time. Simplify logistics and scale smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ff513a] dark:bg-[#ff684e] hover:bg-[#e04631] dark:hover:bg-[#ff5a3f] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              Get Started <ArrowRightCircle className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#599a26] dark:border-[#87c241] text-[#599a26] dark:text-[#87c241] px-8 py-3 rounded-full font-semibold hover:bg-[#599a26] dark:hover:bg-[#87c241] hover:text-white dark:hover:text-gray-900 transition-all"
            >
              Explore Dashboard
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Circular background glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[380px] h-[380px] bg-gradient-to-tr from-[#febf00]/40 to-[#ff513a]/30 dark:from-[#febf00]/20 dark:to-[#ff513a]/10 rounded-full blur-3xl"></div>
          </div>

          <img
            src={heroImg}
            alt="Global trade illustration"
            className="relative rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700 w-full max-w-md lg:max-w-xl object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#febf00"
          fillOpacity="0.2"
          className="dark:fill-gray-700 dark:fill-opacity-20"
          d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,224C672,203,768,149,864,154.7C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
