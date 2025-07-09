import React from 'react';

const Tabs: React.FC = () => {
  const tabs = [
    "Rice and Curry (Vegetable)",
    "Rice and Curry (Egg)",
    "Rice and Curry (Seafood)",
    "Rice and Curry (Meat)",
    "Rice and Curry (Double Meat)",
    "Fried Noodles"
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap p-4 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="inline-block px-4 py-2 text-sm text-gray-700 hover:text-black border-b-2 border-transparent hover:border-black"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
