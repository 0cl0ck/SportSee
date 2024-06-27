import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard.jsx";
import { useState } from "react";
import { MockDataContext } from "../mock/mockDataContext.js";
import ErrorPage from "../pages/ErrorPage.jsx";

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
      { path: "/error", element: <ErrorPage /> },
    ],
  },
]);

export default function Router() {
  const [useMock, setUseMock] = useState(false);
  return (
    <MockDataContext.Provider value={{ useMock, setUseMock }}>
      <RouterProvider router={BrowserRouter} />
    </MockDataContext.Provider>
  );
}
