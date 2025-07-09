import React from 'react';
import { IoMdClose } from "react-icons/io";

interface FoodModalProps {
    isOpen: boolean;
    onClose: () => void;
    food: {
        title: string;
        price: string;
        description: string;
        image: string;
    } | null;
}

const FoodModal: React.FC<FoodModalProps> = ({ isOpen, onClose, food }) => {
    if (!isOpen || !food) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}>
            <div
                className="bg-white p-6 rounded-lg max-w-lg h-96 w-full relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl cursor-pointer"
                >
                    <IoMdClose />
                </button>
                <img src={food.image} alt={food.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-bold mb-2">{food.title}</h2>
                <p className="text-sm text-gray-600 mb-1">{food.price}</p>
                <p className="text-sm text-gray-700">{food.description}</p>
            </div>
        </div>
    );
};

export default FoodModal;
