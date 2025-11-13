import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import ImportedCard from "./ImportedCard";

const MyImported = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch imported products
  useEffect(() => {
    fetch(`https://imex-port.vercel.app/my-imported?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user]);

  // ✅ Remove product from state (UI)
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="my-2">
      <h2 className="text-5xl font-bold text-center py-5 ">
        <span className="text-accent">My</span>{" "}
        <span className="text-primary">Imported</span>{" "}
        <span className="text-accent">Products</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ImportedCard
            key={product._id}
            product={product}
            onRemove={handleRemove} // ✅ Pass function to child
          />
        ))}
      </div>
    </div>
  );
};

export default MyImported;
