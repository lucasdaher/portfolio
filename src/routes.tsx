import NotFound from "@/pages/NotFound/NotFound";

import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);
