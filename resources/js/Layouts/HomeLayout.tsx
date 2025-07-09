import React from "react";
import Header from "@/Components/home/Header";
import Footer from "@/Components/home/Footer";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header/>
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1 min-h-screen ">{children}</main>
      </div>
      <Footer/>
    </div>
  );
}
