import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import DynamicTitle from "../Components/DynamicTitle";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const { signIn, signInWithGoogle, resetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Signed In Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast("Something is wrong");
        const errorCode = error.code;
        const errorMsg = error.message;
        setError(errorCode);
      });
  };
  // handle reset password
const handleRedirectToForgotPassword = () => {
  const emailInput = document.querySelector('input[name="email"]').value;
  if (!emailInput) {
    toast("Please enter your email first!");
    return;
  }
  navigate("/forgot-password", { state: { email: emailInput } });
};

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => navigate(location.state || "/"))
      .catch((err) => setError(err.code));
  };

  return (
    <div className="flex justify-center items-center flex-1 min-h-screen">
      <DynamicTitle title="Login"></DynamicTitle>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogIn} action="">
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                required
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                required
                placeholder="Password"
              />
              <div>
                <a onClick={handleRedirectToForgotPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
              <p className="font-semibold">
                Don't have an account? Please{" "}
                <Link to={"/auth/register"}>
                  <span className="text-blue-500  ">Register</span>
                </Link>{" "}
                now.{" "}
              </p>
            </fieldset>
          </form>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
