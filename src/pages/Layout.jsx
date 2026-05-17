import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer/>
        </>
    )
}