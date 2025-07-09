import { FaStar } from 'react-icons/fa';


type Props = {
  id: number;
  name: string;
  image: string;
  rating: number;
  category: string;
  onClick: () => void
};

export default function RestaurantCard({ id, name, image, rating, category }: Props) {

  return (
    <div

      className="w-72 shadow rounded-2xl overflow-hidden relative group">
      <img src={image} alt={name} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
      <div className="px-2 pb-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-600 inline-flex items-center">
          <FaStar className="text-black mr-1" /> {rating}
        </p>
      </div>
    </div>
  );
}
