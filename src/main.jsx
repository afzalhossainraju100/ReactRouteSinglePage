import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./component/Root/roots.jsx";
import Home from "./component/Home/Home.jsx";
import Mobile from "./component/Mobiles/Mobile.jsx";
import Laptops from "./component/Laptops/Laptops.jsx";
import Users from "./component/Users/Users.jsx";
import Users2 from "./component/Users2/Users2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { index: true, element: <Home /> },
      { path: "Mobiles", element: <Mobile /> },
      { path: "Laptops", element: <Laptops /> },
      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      { path: "Users2", element: <Users2 /> },
      { path: "*", element: <div>Not Found</div> },
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
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
