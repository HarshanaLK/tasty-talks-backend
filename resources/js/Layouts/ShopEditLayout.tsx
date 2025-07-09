import React from "react";
import Footer from "../components/home/Footer";
import AdminHeader from "../components/admin/AdminHeader";
import Sidebar from "../components/admin/Sidebar";

type Props = {
    children: React.ReactNode;
};

export default function ShopEditLayout({ children }: Props) {
    return (
        <div>
            <AdminHeader />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 min-h-screen ">{children}</main>
            </div>
            <Footer />
        </div>
    );
}