import React from "react";
import { Link } from "react-router-dom"; // fixed: use react-router-dom instead of react-router

const ProductCard = ({ product }) => {
  const {
    _id,
    product_image,
    product_name,
    price,
    origin_country,
    rating,
    available_quantity,
  } = product;



  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-gray-800">
        <img
          src={product_image}
          alt={product_name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating Badge */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          ⭐ {rating}
        </span>

        {/* Price Tag */}
        <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          ${price.toLocaleString()}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-2">
        {/* Product Name */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
          {product_name}
        </h2>

        {/* Origin Country */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Origin:
          </span>{" "}
          {origin_country}
        </p>

        {/* Stock Info */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Available:
          </span>{" "}
          {available_quantity > 0 ? (
            <span className="text-green-600 dark:text-green-400 font-semibold">
              {available_quantity} pcs
            </span>
          ) : (
            <span className="text-red-500 font-semibold">Out of Stock</span>
          )}
        </p>

        {/* See Details Button */}
        <Link to={`/product-details/${_id}`}>
          <button className="mt-3 w-full bg-primary hover:bg-amber-400 text-white py-2.5 rounded-xl font-semibold transition-colors duration-300 shadow-sm">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
