import Error from "./views/error/Error";

import { createBrowserRouter } from "react-router-dom";

// import Home from "./views/Home";
import Maintenance from "./views/maintenance/Maintenance"; // Comment this to active maintenance

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
    // element: <Home />,
    errorElement: <Error />,
  },
]);
