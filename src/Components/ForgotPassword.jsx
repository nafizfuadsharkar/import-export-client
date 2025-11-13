import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import DynamicTitle from "./DynamicTitle";
import { toast } from "react-toastify";


const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Prefill email from login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast("Please enter your email");

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        // Open Gmail in new tab
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((err) => toast(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
        <DynamicTitle title="Forgot Password"></DynamicTitle>
      <div className="card bg-base-100 w-full max-w-sm shadow-lg p-5">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset}>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
