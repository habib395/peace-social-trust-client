
import useUser from "@/hooks/useUser";
import { Loader } from "lucide-react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";


interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}
const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const [user, loading] = useUser();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user && allowedRoles.includes(user.role || "")) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
