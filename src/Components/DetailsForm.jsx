import React, { useState } from "react";
import { toast } from "react-toastify";

const DetailsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${name}! Your request has been submitted successfully.`);
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Try Your Toy Now
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition"
          >
            Try Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default DetailsForm;
