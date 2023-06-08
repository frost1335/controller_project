import {
  Link,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
      {
        path: "/",
        element: <Navigate to="/lids" />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1>
        404 error! <br />
        Page not found <br />
        <Link to={-1}>Back</Link>
      </h1>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
