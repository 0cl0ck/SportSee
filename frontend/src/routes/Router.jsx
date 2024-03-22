import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard.jsx";

const BrowserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      { path: "/user/:userId", element: <Dashboard /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={BrowserRouter} />;
}
