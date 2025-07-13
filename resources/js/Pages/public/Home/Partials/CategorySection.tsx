import RestaurantCard from "./RestaurantCard";
import { router } from '@inertiajs/react';

export default function CategorySection({ shops }: { shops: any[] }) {

    console.log(shops);
  return (
    <div className="mt-10 border-b-1 pb-6 border-gray-200">
      <p className="font-bold text-2xl ">Most popular restaurants</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 place-items-center gap-y-8 ">
        {shops.map((shop) => (
          <RestaurantCard
            key={shop.id}
            id={shop.id}
            name={shop.shop_name}
            image={shop.logo}
            rating={shop.rating}
            category={shop.category_name || shop.category?.category_name || "General"}
            onClick={() => router.visit(`/shops/${shop.id}`)}
          />
        ))}
      </section>
    </div>
  );
}
