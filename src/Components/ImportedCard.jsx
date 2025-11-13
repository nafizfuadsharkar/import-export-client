import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ImportedCard = ({ product, onRemove }) => {
  console.log(product);
  // ✅ Handle remove product
  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This imported product will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://imex-port.vercel.app/imported/${product._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Removed!",
              text: "Product removed successfully.",
              icon: "success",
            });
            toast.success("Product removed successfully!");

            // ✅ Remove from UI
            if (onRemove) onRemove(product._id);
          })
          .catch(() => {
            toast.error("Failed to remove product!");
          });
      }
    });
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-gray-800">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          ⭐ {product.rating}
        </span>

        {/* Price */}
        <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          ${product.price}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-2">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {product.product_name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Origin: {product.origin_country}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Imported Quantity:{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            ${product.imported_quantity}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-3">
          <button
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            Remove
          </button>

          <Link
            to={`/product-details/${product.productId}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportedCard;
