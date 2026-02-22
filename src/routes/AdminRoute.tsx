import Loader from "@/components/modules/logoutUI/Loader";
import useUser from "@/hooks/useUser";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";

interface AdminRouteProps {
    children: ReactNode;
}

const AdminRoute = ({children}: AdminRouteProps) => {
    const [user, loading] = useUser();
    const navigate = useNavigate()

    if(loading){
        return <Loader />
    }

    if(user?.role === "admin" || user?.role === "staff"){
        return <>{children}</>
    }

    if(!user || (user.role !== "admin" && user.role !== "staff")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        return navigate("/login")
    }
    return navigate("/login")
};

export default AdminRoute;