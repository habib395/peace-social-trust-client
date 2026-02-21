import App from "@/App";
import About from "@/pages/About";
import Fund from "@/pages/Fund";
import Login from "@/pages/Login";
import Project from "@/pages/Project";
import Register from "@/pages/Registration";
import { Contact } from "lucide-react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: About,
                path: "about"
            },
            {
                Component: Fund,
                path: "fund"
            },
            {
                Component: Project,
                path: "project"
            },
            {
                Component: Contact,
                path: "contact"
            }
        ]
    },
    {
        Component: Login,
        path: "login"
    },
    {
        Component: Register,
        path: "register"
    }
]);

