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
      .then((result) => {
        toast.success("Succussfully Sign Out!");
      })
      .catch((error) => {
        toast("Something is Wrong!");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/auth/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/all-products"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/my-exports"}>My Exports</NavLink>
      </li>
      <li>
        <NavLink to={"/my-imported"}>My Imports</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
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
    <div>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-bold">
            <span className="text-accent">Imex</span>
            <span className="text-primary">Port</span>
          </Link>
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        {user ? (
          <div className="navbar-end flex gap-2 items-center">
            <div className="relative inline-block">
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL || userImg}
                alt="User"
              />
              {/* <span className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 text-white text-sm px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 text-center whitespace-nowrap ">
                {user.displayName}
              </span> */}
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-primary text-white font-semibold"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-2 items-center">
            <img className="w-12 h-12 rounded-full" src={userImg} alt="" />
            <Link
              to={"/auth/login"}
              className="btn btn-primary text-white font-semibold"
            >
              Login
            </Link>
          </div>
        )}
        <div className="ml-1">
          {user && (
            <Link
              to="/profile"
              className="btn btn-primary text-white font-semibold"
            >
              Profile
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
