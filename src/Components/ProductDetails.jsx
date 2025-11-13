import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ProductDetails = ({ product }) => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (!product)
    return (
      <p className="text-center text-gray-500 mt-10">No product data found.</p>
    );

  const {
    product_name,
    seller_name,
    email,
    price,
    rating,
    description,
    product_image,
    category,
    condition,
    usage,
    status,
    location,
    origin_country,
    seller_contact,
    price_min,
    price_max,
    sale_date,
    imported_quantity,
  } = product;

  // State to handle available quantity for instant UI update
  const [availableQty, setAvailableQty] = useState(product.available_quantity);

  const handleImport = async () => {
    // Open modal to enter quantity
    const { value: quantity } = await Swal.fire({
      title: "Import Quantity",
      input: "number",
      inputLabel: `Enter quantity (max ${availableQty})`,
      inputAttributes: {
        min: 1,
        max: availableQty,
        step: 1,
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      preConfirm: (value) => {
        const qty = Number(value);
        if (!qty || qty < 1 || qty > availableQty) {
          Swal.showValidationMessage(
            `Quantity must be between 1 and ${availableQty}`
          );
          return false;
        }
        return qty;
      },
    });

    if (!quantity) return; // user cancelled

    try {
      // 1️⃣ Add to imported collection
      await fetch("http://localhost:3000/imported", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          imported_quantity: quantity,
          imported_by: user.email,
        }),
      });

      // 2️⃣ Increase imported_quantity in products collection
      await fetch(
        `http://localhost:3000/products/${product._id}/increment-imported`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ increment: 1 }),
        }
      );

      // 2️⃣ Decrease available_quantity using $inc
      await fetch(`http://localhost:3000/products/${product._id}/decrement`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ decrement: quantity }),
      });

      // 3️⃣ Update UI instantly
      setAvailableQty((prev) => prev - quantity);

      // 4️⃣ Feedback & navigate to /my-imported
      Swal.fire({
        title: "Imported!",
        text: `You imported ${quantity} kg of ${product_name}.`,
        icon: "success",
        confirmButtonText: "Go to My Imports",
      }).then(() => {
        navigate("/my-imported");
      });
    } catch (err) {
      toast.error("Failed to import product!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden my-10 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
        <img
          src={product_image}
          alt={product_name}
          className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 p-6"
        />
        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="absolute top-4 right-4 bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full shadow">
          ⭐ {rating}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {product_name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {description}
        </p>

        {/* Price & Quantity */}
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${price} /kg
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Range: ${price_min} - ${price_max}
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Available Quantity
            </p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {availableQty.toLocaleString()} kg
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 capitalize">
              {status}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Condition:</span> {condition}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Usage:</span> {usage}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Origin Country:</span>{" "}
              {origin_country}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Location:</span> {location}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Expected Sale Date:</span>{" "}
              {new Date(sale_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mt-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Seller Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Name:</span> {seller_name}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Email:</span>{" "}
            <a
              href={`mailto:${email}`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {email}
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Contact:</span> {seller_contact}
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleImport}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            Import Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
