import { Outlet } from "react-router-dom";

import AdminUser from "../admin/AdminUser";
import SideBar from "./AdminSideBar";
import AdminPagiNation from "./AdminPaiNation";


function AdminLayout() {
    return (
        <>
            <SideBar/>
            <AdminUser />
            
        </>
    )
}

export default AdminLayout;