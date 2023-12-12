import { Outlet } from "react-router-dom";

import AdminUser from "../admin/AdminUser";
import AdminSidebar from "./sidebar";


function AdminLayout() {
    return (
        <>
            <AdminSidebar />
            <AdminUser />
         
        </>
    )
}

export default AdminLayout;