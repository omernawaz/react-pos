import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductCatalogue from "./pages/ProductCatalogue.jsx";
import Home from "./pages/Home.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: "catalogue",
            element: <ProductCatalogue />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
