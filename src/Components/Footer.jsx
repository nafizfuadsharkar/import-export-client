import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Add your logo here
import { Mail, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed ${email}!`); // replace with real logic
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-tr from-[#ffe6b0] via-[#fff4d6] to-[#fff9ec] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Link to={"/"} className="text-xl font-bold">
            <span className="text-accent">Imex</span>
            <span className="text-primary">Port</span>
          </Link>
          <p className="text-gray-700 dark:text-gray-300">
            ImexPort – Simplifying global trade. Track, manage, and
            export/import products with ease.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#febf00] transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#599a26] transition-all">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#ff513a] transition-all">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#febf00] transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <Link className="hover:text-[#ff513a] transition-all" to="/about">
            About Us
          </Link>
          <Link className="hover:text-[#febf00] transition-all" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-[#599a26] transition-all" to="/jobs">
            Jobs
          </Link>
          <Link className="hover:text-[#ff513a] transition-all" to="/press">
            Press Kit
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">
            Subscribe to Newsletter
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Get the latest updates on products and global trade insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#febf00] dark:bg-gray-800 dark:text-gray-100 flex-1"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff513a] to-[#febf00] text-white px-6 py-2 rounded-r-full font-semibold hover:opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 py-6 text-center text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} - All rights reserved by ImexPort
        Industries
      </div>
    </footer>
  );
};

export default Footer;
