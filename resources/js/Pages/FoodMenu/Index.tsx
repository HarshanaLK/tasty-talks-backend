import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

export default function MenuEdit() {
    type MenuItem = {
        id: number;
        name: string;
        price: number;
        description: string;
        image: string; // will hold base64 string
        category: string;
    };

    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {
            id: 1,
            name: 'Zinger Burger',
            price: 800,
            description: 'Spicy crispy chicken burger.',
            image: '',
            category: 'Burger',
        },
        {
            id: 2,
            name: 'Burger',
            price: 800,
            description: 'Spicy crispy chicken burger.',
            image: '',
            category: 'Burger',
        },
    ]);

    const handleMenuChange = (index: number, field: keyof MenuItem, value: string | number) => {
        const newMenu = [...menuItems];
        newMenu[index][field] = value as never;
        setMenuItems(newMenu);
    };

    const handleAddNewItem = () => {
        const newItem: MenuItem = {
            id: menuItems.length ? Math.max(...menuItems.map(i => i.id)) + 1 : 1,
            name: '',
            price: 0,
            description: '',
            image: '',
            category: '',
        };
        setMenuItems([...menuItems, newItem]);
    };

    const handleDelete = (id: number) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    const handleSave = () => {
        console.log('Saving menu items:', menuItems);
        // Here you would send the data to the backend
    };

    return (
        <AdminLayout  title={'Food Menu Details'} bRoutes={undefined}>
            <div className='max-w-7xl mx-auto'>
                <div className="max-w-7xl mx-auto p-6 space-y-6">
                    <h1 className="text-2xl font-bold">Edit Food Menu</h1>

                    <div className='flex justify-between'>
                        <h2 className="text-xl font-semibold">Menu Items</h2>
                        <button
                            onClick={handleAddNewItem}
                            className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700"
                        >
                            Add New Item
                        </button>
                    </div>

                    {menuItems.length === 0 && (
                        <p className="mb-4 text-gray-600">No menu items available. Add a new one below.</p>
                    )}

                    {menuItems.map((item, index) => (
                        <div key={item.id} className="border p-4 rounded mb-4 space-y-3 relative">
                            <div className='grid grid-cols-2 gap-6'>
                                {/* Left side: Text inputs */}
                                <div className='space-y-4'>
                                    <div>
                                        <label className="block mb-1 font-medium">Food Name</label>
                                        <input
                                            className="w-full p-2 border rounded"
                                            value={item.name}
                                            onChange={(e) => handleMenuChange(index, 'name', e.target.value)}
                                            placeholder="Food Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Food Category</label>
                                        <input
                                            className="w-full p-2 border rounded"
                                            value={item.category}
                                            onChange={(e) => handleMenuChange(index, 'category', e.target.value)}
                                            placeholder="Food Category"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Price</label>
                                        <input
                                            className="w-full p-2 border rounded"
                                            type="number"
                                            value={item.price}
                                            onChange={(e) => handleMenuChange(index, 'price', parseFloat(e.target.value))}
                                            placeholder="Price"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Description</label>
                                        <input
                                            className="w-full p-2 border rounded"
                                            value={item.description}
                                            onChange={(e) => handleMenuChange(index, 'description', e.target.value)}
                                            placeholder="Description"
                                        />
                                    </div>
                                </div>

                                {/* Right side: Image upload */}
                                <div>
                                    <label className="block mb-1 font-medium">Food Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    handleMenuChange(index, 'image', reader.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                        className="w-full p-2 border rounded"
                                    />
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt="Preview"
                                            className="mt-2 w-32 h-32 object-cover border rounded"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="absolute top-0 right-0 text-red-600 hover:text-red-800 font-bold"
                                title="Delete item"
                            >
                                <IoMdClose className='text-xl' />
                            </button>
                        </div>
                    ))}
                    {menuItems.length > 0 && (
                        <div className='flex justify-end'>
                            <button
                                className="px-6 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
