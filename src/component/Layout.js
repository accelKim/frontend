import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../home/home";
function Layout() {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default Layout;