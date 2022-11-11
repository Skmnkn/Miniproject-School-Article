import { Navigate, Outlet } from "react-router-dom";
import { AdminHeader } from "../Components/Admin/AdminHeader";
import loginStatus from "../Utils/auth";

export const PrivateRoute = () => {
  if (loginStatus.setAuth()) {
    return (
      <AdminHeader>
        <Outlet />
      </AdminHeader>
    );
  } else {
    return <Navigate to="/loginPage" replace />;
  }
};
