import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import DynamicTitle from "../Components/DynamicTitle";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (password.length < 6) {
      toast("Password must be at least 6 characters long");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      toast("Password must include at least one uppercase letter");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast("Password must include at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registered Successfully!");
            navigate("/");
          })
          .catch((error) => {
            toast("Error updating profile: " + error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        toast("Error creating account: " + error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed up with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast("Google sign-up failed: " + error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <DynamicTitle title="Register"></DynamicTitle>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
              className="input"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input"
            />

            <button type="submit" className="btn btn-primary mt-4 w-full">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleSignUp}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <p className="mt-4 text-center font-semibold">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
