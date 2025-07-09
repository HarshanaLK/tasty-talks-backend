import React from 'react';
import ShopHeader from '../../components/shop/ShopHeader';
import MenuSection from '../../components/shop/MenuSection';
import Map from '../../components/shop/Map';
import Tabs from '../../components/shop/Tabs';
import Header from '../../components/home/Header';
import { useParams } from "react-router-dom";
import Footer from '../../components/home/Footer';

// Sample shop data keyed by ID
const shopDataMap: Record<string, {
  id: string;
  name: string;
  address: string;
  rating: number;
  description: string;
  image: string;
  isOpen: boolean;
  foodItems: {
    title: string;
    price: string;
    description: string;
    image: string;
  }[];
}> = {
  '1': {
    id: '1',
    name: "KFC - Colombo",
    address: '45 King St, Colombo',
    rating: 4.6,
    description: " American, Burgers, Hot Dog",
    isOpen: false,
    image: 'https://placehold.co/400x200?text=Coffee+House',
    foodItems: [
      {
        title: "Zinger Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      },
      {
        title: "Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      },
      {
        title: "Zinger Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      },
      {
        title: "Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Spice Garden',
    address: '78 Queen Rd, Kandy',
    rating: 4.2,
    description: " American, Burgers, Hot Dog",
    isOpen: true,
    image: 'https://placehold.co/400x200?text=Spice+Garden',
    foodItems: [
      {
        title: "Zinger Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Burger Barn',
    address: '12 Main Ave, Galle',
    rating: 4.8,
    description: " American, Burgers, Hot Dog",
    isOpen: true,
    image: 'https://placehold.co/400x200?text=Burger+Barn',
    foodItems: [
      {
        title: "Zinger Burger",
        price: "LKR 800.00",
        description: "Spicy crispy chicken burger.",
        image: "https://placehold.co/600x400"
      }
    ]
  },
  '4': {
    id: '4',
    name: 'Pizza Hut - Nugegoda',
    address: '101 Lotus Rd, Colombo',
    rating: 4.3,
    description: " American, Burgers, Hot Dog",
    isOpen: false,
    image: 'https://placehold.co/400x200?text=Sushi+Corner',
    foodItems: [

    ]
  },
};


const App: React.FC = () => {
  const { id } = useParams();
  // Get shop by ID or use a default fallback
  const shopData = id && shopDataMap[id]
    ? shopDataMap[id]
    : {
      id: '',
      name: 'Unknown Shop',
      address: 'N/A',
      rating: 0,
      description: '',
      isOpen: false,
      image: 'https://placehold.co/400x200?text=No+Shop+Found',
      foodItems: []
    };

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto'>
        <ShopHeader shopData={shopData} />
        <Map />
        <Tabs />
        <MenuSection foodItems={shopData.foodItems || []} />
      </div>
      <Footer />
    </>
  );
};

export default App;