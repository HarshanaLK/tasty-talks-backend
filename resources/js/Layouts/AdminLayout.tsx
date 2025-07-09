import React from "react";
import Footer from "../components/home/Footer";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div>
      <AdminHeader/>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 min-h-screen ">{children}</main>
      </div>
      <Footer/>
    </div>
  );
}