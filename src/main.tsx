import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import Home from "./Components/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home />  }],

    // suspense loadier loader 
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* https://www.figma.com/file/SyjZMCcbyc41Yg0dzrmcIW/P%C3%A1gina-Web?node-id=870%3A2881&mode=dev */
