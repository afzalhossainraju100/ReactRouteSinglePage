import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./component/Root/roots.jsx";
import Home from "./component/Home/Home.jsx";
import Mobile from "./component/Mobiles/Mobile.jsx";
import Laptops from "./component/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobile },
      { path: "Laptops", Component: Laptops },
    ],
  },
  {
    path: "/about",
    element: <div>About Me this is...! </div>,
  },
  {
    path: "/blog",
    element: <div>Welcome to my blog</div>,
  },
  {
    path: "/app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
