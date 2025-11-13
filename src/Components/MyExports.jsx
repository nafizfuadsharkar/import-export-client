import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import ProductCard from "./ProductCard";
import ExportCard from "./ExportCard";
import { Link } from "react-router";

const MyExports = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://imex-port.vercel.app/my-exports?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-5xl font-bold text-center py-5 ">
        <span className="text-accent">My</span>{" "}
        <span className="text-primary">Exported</span>{" "}
        <span className="text-accent">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <ExportCard key={product._id} product={product}></ExportCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/export-product" className="btn btn-primary my-10">
          Add Products
        </Link>
      </div>
    </div>
  );
};

export default MyExports;
