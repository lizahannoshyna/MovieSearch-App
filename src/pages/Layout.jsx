import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <Header />
                </div>
            </header>

            <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-6">
                <Outlet />
            </main>

            <footer className="w-full border-t py-4 text-center text-sm text-gray-500">
                <div className="max-w-6xl mx-auto px-4">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};