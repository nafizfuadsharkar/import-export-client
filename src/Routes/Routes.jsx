import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ToyIndividual from "../Pages/ProductIndividual";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";
import About from "../Components/About";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Components/Profile";
import ForgotPassword from "../Components/ForgotPassword";
import AllProducts from "../Components/AllProducts";
import ExportProduct from "../Components/ExportProduct";
import ProductIndividual from "../Pages/ProductIndividual";
import MyExports from "../Components/MyExports";
import UpdateProduct from "../Pages/UpdateProduct";
import MyImported from "../Components/MyImported";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/recent-products"),
      },
      {
        path: "/category/:id",
        element: <ToyIndividual></ToyIndividual>,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/export-product",
        element: (
          <PrivateRoute>
            <ExportProduct />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/my-imported",
        element: (
          <PrivateRoute>
            <MyImported />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/my-exports",
        element: (
          <PrivateRoute>
            <MyExports />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/Register",
        Component: Register,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: (
      <PrivateRoute>
        <ProductIndividual></ProductIndividual>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:3000/products/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
  },
]);

export default router;
