import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, logOut } = use(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut()
      .then(() => toast.success("Successfully signed out!"))
      .catch(() => toast.error("Something went wrong!"));
  };

  const links = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/all-products"}>All Products</NavLink></li>
      <li><NavLink to={"/my-exports"}>My Exports</NavLink></li>
      <li><NavLink to={"/my-imported"}>My Imports</NavLink></li>
      <li><NavLink to={"/about"}>About</NavLink></li>
    </>
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="w-full shadow-sm bg-base-100 sticky top-0 z-50">
      <nav className="navbar bg-base-100">
        {/* --- Left Section --- */}
        <div className="navbar-start">
          {/* Dropdown for mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            {/* Mobile dropdown menu */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
              {/* 👇 Added user controls here for mobile */}
              {user ? (
                <>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><button onClick={handleLogOut}>Logout</button></li>
                </>
              ) : (
                <li><Link to="/auth/login">Login</Link></li>
              )}
            </ul>
          </div>

          {/* Brand Logo */}
          <Link to={"/"} className="btn btn-ghost text-xl font-bold">
            <span className="text-accent">Imex</span>
            <span className="text-primary">Port</span>
          </Link>

          {/* Theme toggle */}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle ml-2"
          />
        </div>

        {/* --- Center Links for Desktop --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* --- Right Section --- */}
        <div className="navbar-end gap-2 items-center">
          {/* 👇 Make this hidden on small screens (it’s already in dropdown) */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL || userImg}
                alt="User"
              />
              <Link
                to="/profile"
                className="btn btn-primary text-white font-semibold"
              >
                Profile
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-primary text-white font-semibold"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
              <Link
                to={"/auth/login"}
                className="btn btn-primary text-white font-semibold"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
