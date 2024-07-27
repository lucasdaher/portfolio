import Error from "./views/error/Error";
// import Home from "./views/Home";

import { createBrowserRouter } from "react-router-dom";
import Maintenance from "./views/maintanance/Maintanance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
    // element: <Home />,
    errorElement: <Error />,
  },
]);
