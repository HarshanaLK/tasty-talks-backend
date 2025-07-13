import CategoryFilterBar from "@/Pages/Public/Home/Partials/CategoryFilterBar";
import CategorySection from "@/Pages/Public/Home/Partials/CategorySection";
import FilterOptionsBar from "@/Pages/Public/Home/Partials/FilterOptionsBar";
import HeroBanner from "@/Pages/Public/Home/Partials/HeroBanner";
import PaidAdvertistment from "@/Pages/Public/Home/Partials/PaidAdvertistment";
import HomeLayout from "@/Layouts/HomeLayout";



export default function Index({shops}:{shops:any}) {

  return (
    <HomeLayout>
      <HeroBanner />
      <div className='max-w-7xl mx-auto'>
        <CategoryFilterBar />
        <FilterOptionsBar />
        <PaidAdvertistment />
        <CategorySection shops={shops} />
      </div>
    </HomeLayout>
  );
}
