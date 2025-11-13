import React from "react";
import { Link, useRouteError } from "react-router";
import errorImg from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DynamicTitle from "../Components/DynamicTitle";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navbar />
      <DynamicTitle title="Error Page"></DynamicTitle>
      <div className="space-y-6 text-center my-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={errorImg} alt="Error" className="w-64 h-64" />
          <h1 className="text-2xl font-semibold">Oops, page not found!</h1>
          <p>The page you are looking for is not available.</p>
          <Link to="/" className="btn btn-primary">
            Go Back
          </Link>
        </div>

        {/* Safely render the error message if it exists */}
        {error && <p className="text-red-500 mt-4">{error?.message || "Unknown error"}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
