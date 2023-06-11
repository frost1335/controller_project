import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Students,
  Groups,
  Lids,
  Teachers,
  StudentDetail,
  GroupDetail,
  TeacherDetail,
} from "./pages";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // lids router
      {
        path: "/lids",
        children: [
          {
            index: true,
            element: <Lids />,
          },
        ],
      },
      // students router
      {
        path: "/students",
        children: [
          {
            index: true,
            element: <Students />,
          },
          {
            path: "detail/:studentId",
            element: <StudentDetail />,
          },
        ],
      },
      // groups router
      {
        path: "/groups",
        children: [
          {
            index: true,
            element: <Groups />,
          },
          {
            path: "detail/:groupId",
            element: <GroupDetail />,
          },
        ],
      },
      // teachers router
      {
        path: "/teachers",
        children: [
          {
            index: true,
            element: <Teachers />,
          },
          {
            path: "detail/:teacherId",
            element: <TeacherDetail />,
          },
        ],
      },
      // lids redirect route
      {
        path: "/",
        element: <Lids />,
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
