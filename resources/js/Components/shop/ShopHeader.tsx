import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';




type ShopData = {
  id: string;
  name: string;
  address: string;
  description: string;
  rating: number;
  image: string;
  isOpen: boolean;
};


const Header: React.FC<{ shopData: ShopData }> = ({ shopData }) => {

  return (
    <div className="relative mt-2">
      <img
        src="https://placehold.co/600x400"
        alt="Header"
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className=" bottom-0 left-0 bg-white py-4 w-full">
        <div className='flex justify-between'>
          <div>
            <h1 className="text-2xl font-bold">{shopData.name}</h1>
            <p className="text-sm text-gray-600 inline-flex items-center">
              <FaStar className="text-black mr-1" /> {shopData.rating} - {shopData.description}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <IoLocation />
              {shopData.address}
            </p>
          </div>
          <div className='pr-2'>
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${shopData.isOpen ? 'bg-green-400' : 'bg-red-400'
                    } opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${shopData.isOpen ? 'bg-green-500' : 'bg-red-500'
                    }`}
                ></span>
              </span>
              <span
                className={`text-sm font-semibold ${shopData.isOpen ? 'text-green-700' : 'text-red-700'
                  }`}
              >
                {shopData.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
