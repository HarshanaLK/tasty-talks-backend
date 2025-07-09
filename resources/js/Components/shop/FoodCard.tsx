import React from 'react';

interface FoodCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  onClick: () => void

}

const FoodCard: React.FC<FoodCardProps> = ({ title, price, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl bg-white border-[1px] border-gray-200 w-full   cursor-pointer">
      <div className='flex justify-between'>
        <div className="p-4">
          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-600">{price}</p>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
        <img src={image} alt={title} className="w-48 rounded-r-2xl  object-cover" />
      </div>
    </div>
  );
};

export default FoodCard;
