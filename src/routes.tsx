import Error from "@/pages/error/Error";

import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);
