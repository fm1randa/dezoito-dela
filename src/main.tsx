import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider } from "@tanstack/react-router";
import "./index.css";

import { routeTree } from "./routeTree.gen";

const router = new Router({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
