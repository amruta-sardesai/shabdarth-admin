import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import PageNotFound from "./views/404";
import AdminLayout from "./views/AdminLayout";
import Dashboard from "./views/admin/Dashboard";
import Users from "./views/admin/Users";
import Words from "./views/admin/Words";
import UserWords from "./views/admin/UserWords";
import { adminLoader } from "./utils/RouteLoader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/admin",
      loader: adminLoader,
      errorElement: <PageNotFound />,
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/users",
          element: <Users />,
        },
        {
          path: "/admin/words",
          element: <Words />,
        },
        {
          path: "/admin/user-words",
          element: <UserWords />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
