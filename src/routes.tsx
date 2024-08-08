import Error from "./views/error/Error";

import { createBrowserRouter } from "react-router-dom";

import Home from "./views/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Maintenance />,
    element: <Home />,
    errorElement: <Error />,
  },
]);
