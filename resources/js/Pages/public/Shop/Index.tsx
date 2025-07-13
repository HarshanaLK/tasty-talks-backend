import React from "react";
import Header from "@/Components/home/Header";
import Footer from "@/Components/shared/Footer";
import Map from "@/Components/shop/Map";
import MenuSection from "@/Components/shop/MenuSection";
import ShopHeader from "@/Components/shop/ShopHeader";
import Tabs from "@/Components/shop/Tabs";

interface ShopViewProps {
  shopData: any;
}

const ShopView: React.FC<ShopViewProps> = ({ shopData }) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <ShopHeader shopData={shopData} />
        <Map />
        <Tabs />
        {/* Uncomment and pass foodItems if needed */}
        {/* <MenuSection foodItems={shopData.foodItems || []} /> */}
      </div>
      <Footer />
    </>
  );
};

export default ShopView;
