import { createBrowserRouter } from "react-router";
import App from "@/App";
import About from "@/pages/About";
import Fund from "@/pages/Fund";
import Login from "@/pages/Login";
import Project from "@/pages/Project";
import Register from "@/pages/Registration";
import AdminDashboard from "@/components/layout/AdminDashboard";
import StaffDashboard from "@/components/layout/StaffDashboard";
import Contact from "@/pages/Contact";
import ProtectedRoute from "./ProtectedRoute";
import Home from "@/components/modules/uiComponents/homeComponents/Home";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/"
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Fund />,
        path: "fund",
      },
      {
        element: <Project />,
        path: "project",
      },
      {
        element: <Contact />,
        path: "contact",
      },
    ],
  },
  {
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    path: "/admin",
  },
  {
    element: (
      <ProtectedRoute allowedRoles={["staff"]}>
        <StaffDashboard />
      </ProtectedRoute>
    ),
    path: "/staff",
  },
  {
    element: <Login />,
    path: "login",
  },
  {
    element: <Register />,
    path: "register",
  },
]);
