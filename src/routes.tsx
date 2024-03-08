import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { CoinDetails } from "./pages/CoinDetails";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/moeda/:coinSymbol",
        element: <CoinDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
