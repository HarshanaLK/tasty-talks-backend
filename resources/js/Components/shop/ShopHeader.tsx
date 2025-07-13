import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

type ShopData = {
    id: string;
    shop_name: string;
    shop_address: string;
    description: string;
    rating: number;
    cover: string;
    logo:string;
    shop_status: boolean;
    open_time_formatted: string;
    close_time_formatted: string;
};

const Header: React.FC<{ shopData: ShopData }> = ({ shopData }) => {
    return (
        <div className="relative mt-2">
            {/* Cover Image */}
            <img
                src={shopData.cover || "https://placehold.co/600x400"}
                alt="Shop cover image"
                className="w-full h-60 object-cover rounded-xl"
            />

            {/* Round Logo - Fake logo for now */}
            <div className="absolute top-40 left-24 transform -translate-x-1/2">
                <img
                    src={shopData.logo || "https://placehold.co/600x400"} // Replace with actual logo if available
                    alt="Shop logo"
                    className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                />
            </div>

            {/* Details Section */}
            <div className="bg-white pt-8 pb-4 w-full rounded-b-xl">
                <div className='flex justify-between px-4'>
                    <div>
                        <h1 className="text-2xl font-bold text-center sm:text-left">{shopData.shop_name}</h1>
                        <p className="text-sm text-gray-600 inline-flex items-center">
                            <FaStar className="text-black mr-1" /> {shopData.rating} - {shopData.description}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                            <IoLocation />
                            {shopData.shop_address}
                        </p>
                    </div>
                    <div className='pr-2'>
                        <div className="flex items-center space-x-2">
                            <span className="relative flex h-3 w-3">
                                <span
                                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${shopData.shop_status ? 'bg-green-400' : 'bg-red-400'
                                        } opacity-75`}
                                ></span>
                                <span
                                    className={`relative inline-flex rounded-full h-3 w-3 ${shopData.shop_status ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                ></span>
                            </span>
                            <span
                                className={`text-sm font-semibold ${shopData.shop_status ? 'text-green-700' : 'text-red-700'
                                    }`}
                            >
                                {shopData.shop_status ? 'Open Now' : 'Closed'}
                            </span>
                        </div>
                        <p>Day</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-sm text-gray-600">{shopData.open_time_formatted}</p>
                            <span className="text-sm text-gray-600">-</span>
                            <p className="text-sm text-gray-600">{shopData.close_time_formatted}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
