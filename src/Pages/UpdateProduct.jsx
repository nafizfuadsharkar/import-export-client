import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

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

    fetch(`http://localhost:3000/product/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product updated successfully!");
        Swal.fire({
          title: "Updated!",
          text: "Your product has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#2563EB",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update product.");
      });
  };

  return (
    <div className="card bg-white dark:bg-gray-900 w-full max-w-2xl mx-auto shadow-2xl rounded-2xl my-10 border border-gray-100 dark:border-gray-700">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Update Product
        </h2>

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
  );
};

export default UpdateProduct;
