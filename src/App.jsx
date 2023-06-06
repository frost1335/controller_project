import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Students, Groups, Lids, Teachers } from "./pages";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/lids",
        element: <Lids />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
