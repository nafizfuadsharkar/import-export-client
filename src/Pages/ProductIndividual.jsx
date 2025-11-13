import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DetailsForm from "../Components/DetailsForm";
import DynamicTitle from "../Components/DynamicTitle";
import ProductDetails from "../Components/ProductDetails";
import { useLoaderData } from "react-router";

const ProductIndividual = () => {
  const product = useLoaderData(); // ✅ single product object

  return (
    <div>
      <DynamicTitle title="Details" />
      <header className="w-11/12 mx-auto py-4">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <ProductDetails product={product} />
        <DetailsForm />
      </main>
      <Footer />
    </div>
  );
};

export default ProductIndividual;
