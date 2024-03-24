import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard.jsx";
import { useState } from "react";
import { MockDataContext } from "../utils/mockDataContext.js";

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
  const [useMock, setUseMock] = useState(false);
  return (
    <MockDataContext.Provider value={{ useMock, setUseMock }}>
      <RouterProvider router={BrowserRouter} />
    </MockDataContext.Provider>
  );
}
