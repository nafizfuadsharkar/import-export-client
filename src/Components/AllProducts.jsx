import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import Loading from "../Pages/Loading";
import NoProduct from "./NoProduct";

const AllProducts = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false); // 👈 to know if search was performed

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();
    if (!search_text) return; // do nothing for empty input

    setLoading(true);
    setSearched(true); // 👈 mark that user searched

    fetch(`https://imex-port.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-5xl font-bold text-center py-5">
        <span className="text-accent">All</span>{" "}
        <span className="text-primary">Products</span>{" "}
        <span className="text-accent">Here</span>
      </h2>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-primary rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Product List */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : searched ? (
        // 👇 Only show NoProduct after a search with no results
        <NoProduct />
      ) : (
        // 👇 Optional: when there are no products initially
        <p className="text-center text-gray-500 py-10">
          No products available yet.
        </p>
      )}
    </div>
  );
};

export default AllProducts;
