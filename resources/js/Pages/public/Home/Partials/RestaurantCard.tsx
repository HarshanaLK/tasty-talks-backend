import { FaStar } from 'react-icons/fa';


type Props = {
    id: number;
    name: string;
    image: string;
    rating: number;
    category: string;
    onClick: () => void
};

export default function RestaurantCard({ id, name, image, rating, category, onClick }: Props) {

    return (
        <div
            onClick={onClick}
            className="w-72 h-72 shadow rounded-2xl overflow-hidden relative group bg-white cursor-pointer hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="px-3 py-2">
                <h3 className="font-semibold text-lg truncate">{name}</h3>
                <p className="text-sm text-gray-500 truncate">{category}</p>
                <p className="text-sm text-gray-600 inline-flex items-center">
                    <FaStar className="text-black mr-1" /> {rating}
                </p>
            </div>
        </div>
    );
}
