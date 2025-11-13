import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ExportProduct = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      product_name: e.target.product_name.value,
      price: parseFloat(e.target.price.value),
      email: user.email,
      category: e.target.category.value,
      created_at: new Date().toISOString(),
      sale_date: new Date().toISOString(),
      product_image: e.target.product_image.value,
      status: e.target.status.value,
      location: user.location,
      seller_name: user.displayName,
      condition: e.target.condition.value,
      usage: e.target.usage.value,
      description: e.target.description.value,
      seller_contact: user.seller_contact,
      origin_country: e.target.origin_country.value,
      rating: parseFloat(e.target.rating.value),
      available_quantity: parseInt(e.target.available_quantity.value),
      price_min: 0,
      price_max: 1000,
      created_by: user?.email || "anonymous",
    };

    fetch("https://imex-port.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Exported successfully!");
        e.target.reset();
        navigate("/my-export");
      })
      .catch((err) => {
        toast.error("Failed to add product!");
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-2xl mx-auto shadow-2xl rounded-2xl mt-10 mb-5">
      <div className="card-body p-6 relative">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 text-transparent bg-clip-text">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="label font-medium">Product Name</label>
            <input
              type="text"
              name="product_name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Industrial Grade Steel Beams"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="6250"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-medium">Category</label>
            <input
              type="text"
              name="category"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Construction Materials"
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="label font-medium">Product Image URL</label>
            <input
              type="url"
              name="product_image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://i.ibb.co.com/example.jpg"
            />
          </div>

          {/* Status */}
          <div>
            <label className="label font-medium">Status</label>
            <select
              name="status"
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
          </div>

          {/* Condition & Usage */}
          <div>
            <label className="label font-medium">Condition</label>
            <input
              type="text"
              name="condition"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="fresh"
            />
          </div>

          <div>
            <label className="label font-medium">Usage</label>
            <input
              type="text"
              name="usage"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="New stock"
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="label font-medium">Origin Country</label>
            <input
              type="text"
              name="origin_country"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Germany"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="4.8"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="label font-medium">Available Quantity</label>
            <input
              type="number"
              name="available_quantity"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[120px]"
              placeholder="High-quality I-beams and H-beams, S355 grade steel, certified."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-primary hover:from-yellow-500 hover:via-blue-600 hover:to-red-600 transition-all duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExportProduct;
