import React, { useState } from 'react';
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';

  type FoodItem = {
    title: string;
    price: string;
    description: string;
    image: string;
  };

  type Props = {
    foodItems: FoodItem[];
  };

const MenuSection: React.FC<Props> = ({ foodItems }) => {


  const [selectedFood, setSelectedFood] = useState<typeof foodItems[0] | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (food: typeof foodItems[0]) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Rice and Curry (Vegetable)</h2>
      <section className="grid  lg:grid-cols-2 mt-6 place-items-center gap-8 ">
        {foodItems.map((item, index) => (
          <FoodCard key={index} {...item} onClick={() => openModal(item)} />
        ))}
      </section>
      <FoodModal isOpen={isModalOpen} onClose={closeModal} food={selectedFood} />
    </div>
  );
};

export default MenuSection;
