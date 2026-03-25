import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar"
import Banner from "../shared/Banner"
import Footer from "../shared/Footer"

export default function Layout() {
    return (
        <>
            <Banner />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}