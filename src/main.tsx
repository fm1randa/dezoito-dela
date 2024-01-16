import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import "./index.css";

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <div></div>;
  },
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
