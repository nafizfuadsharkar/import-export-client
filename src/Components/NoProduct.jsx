import React from "react";
import errorImg from "../assets/App-Error.png";
import { Link } from "react-router";

const NoProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      {/* Image */}
      <img
        src={errorImg}
        alt="No products found"
        className="w-40 h-40 mb-4 opacity-80"
      />

      {/* Message */}
      <h2 className="text-3xl font-semibold text-gray-700">
        OOPS!! Product Not Found
      </h2>
      <p className="text-gray-500 text-lg max-w-md">
        The product you’re looking for doesn’t exist or couldn’t be found.
        Please try another search keyword.
      </p>

      {/* Button */}
      <Link
        to="/all-products"
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 mt-4 rounded-full"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NoProduct;
