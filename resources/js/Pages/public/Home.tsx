import CategoryFilterBar from "@/Components/home/CategoryFilterBar";
import CategorySection from "@/Components/home/CategorySection";
import FilterOptionsBar from "@/Components/home/FilterOptionsBar";
import HeroBanner from "@/Components/home/HeroBanner";
import PaidAdvertistment from "@/Components/home/PaidAdvertistment";
import HomeLayout from "@/Layouts/HomeLayout";



export default function Home() {
  return (
    <HomeLayout>
      <HeroBanner />
      <div className='max-w-7xl mx-auto'>
        <CategoryFilterBar />
        <FilterOptionsBar />
        <PaidAdvertistment />
        <CategorySection />
        <CategorySection />
      </div>
    </HomeLayout>
  );
}
