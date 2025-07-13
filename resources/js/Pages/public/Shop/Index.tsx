import Header from "@/Components/home/Header";
import Footer from "@/Components/shared/Footer";
import Map from "@/Components/shop/Map";
import MenuSection from "@/Components/shop/MenuSection";
import ShopHeader from "@/Components/shop/ShopHeader";
import Tabs from "@/Components/shop/Tabs";


// Sample shop data keyed by ID

const App: React.FC = () => {


  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto'>
        <ShopHeader shopData={shopData} />
        <Map />
        <Tabs />
        <MenuSection foodItems={shopData.foodItems || []} />
      </div>
      <Footer />
    </>
  );
};

export default App;
