import React, { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ExportCard = ({ product, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      product_name: e.target.product_name.value,
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      available_quantity: parseInt(e.target.available_quantity.value),
      category: e.target.category.value,
      product_image: e.target.product_image.value,
    };

    fetch(`https://imex-port.vercel.app/product/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Updated!",
          text: "Your product has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#2563EB",
        });
        toast.success("Product updated successfully!");
        setShowModal(false);

        if (onUpdate) onUpdate(product._id, formData);
      })
      .catch(() => {
        toast.error("Failed to update product.");
      });
  };

  const navigate = useNavigate();

  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://imex-port.vercel.app/product/${product._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/my-exports");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            toast.error("Failed to add product!");
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
          Available:{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            {product.available_quantity} pcs
          </span>
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-3">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            Delete
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm"
          >
            Update
          </button>
        </div>
      </div>

      {/* ✅ Update Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
          {/* Modal Content */}
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto 
               bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 
               border border-gray-200 dark:border-gray-700
               scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 
               dark:scrollbar-thumb-blue-700 dark:scrollbar-track-gray-800
               transition-all duration-300"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
              Update Product
            </h2>

            {/* Your Form Design */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Product Name */}
              <div>
                <label className="label font-semibold text-gray-400 dark:text-gray-300">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product_name"
                  defaultValue={product.product_name}
                  required
                  className="input w-full rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 text-gray-300"
                  placeholder="Enter product name"
                />
              </div>

              {/* Price */}
              <div>
                <label className="label font-semibold text-gray-700 dark:text-gray-300">
                  Price (USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  defaultValue={product.price}
                  required
                  className="input w-full rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 text-gray-300"
                  placeholder="Enter price"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="label font-semibold text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={product.category}
                  required
                  className="select w-full rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 text-gray-300"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Food & Beverages">Food & Beverages</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Textile">Textile</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="label font-semibold text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={product.description}
                  required
                  rows="4"
                  className="textarea w-full rounded-2xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 h-[150px] text-gray-300"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              {/* Available Quantity */}
              <div>
                <label className="label font-semibold text-gray-700 dark:text-gray-300">
                  Available Quantity
                </label>
                <input
                  type="number"
                  name="available_quantity"
                  defaultValue={product.available_quantity}
                  required
                  className="input w-full rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 text-gray-300"
                  placeholder="Enter available quantity"
                />
              </div>

              {/* Product Image URL */}
              <div>
                <label className="label font-semibold text-gray-700 dark:text-gray-300 ">
                  Product Image URL
                </label>
                <input
                  type="url"
                  name="product_image"
                  defaultValue={product.product_image}
                  required
                  className="input w-full rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-blue-400 p-3 text-gray-300"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-xl text-white font-semibold bg-primary hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-md"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportCard;
