import Error from "./views/error/Error";

import { createBrowserRouter } from "react-router-dom";

import Home from "./views/Home";
import AboutMe from "./views/aboutme/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Maintenance />,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
    errorElement: <Error />,
  },
]);
