import AdminLayout from '@/Layouts/AdminLayout';
import { IoMdClose } from 'react-icons/io';

interface Category {
    id: number;
    category_name: string;
}

interface FoodItem {
    id: number;
    food_name: string;
    price: number;
    food_description: string;
    food_image: string;
    meal: string;
    category?: Category;
}

export default function MenuEdit({ foods }: { foods: FoodItem[] }) {
    const menuItems = foods;

    return (
        <AdminLayout title={'Food Menu Details'} bRoutes={undefined}>
            <div className='max-w-7xl mx-auto'>
                <div className="max-w-7xl mx-auto p-6 space-y-6">
                    <h1 className="text-2xl font-bold">Food Menu</h1>

                    {menuItems.length === 0 && (
                        <p className="mb-4 text-gray-600">No menu items available.</p>
                    )}

                    {menuItems.map((item) => (
                        <div key={item.id} className="border p-4 rounded mb-4 space-y-3 relative">
                            <div className='grid grid-cols-2 gap-6'>
                                {/* Left: Text details */}
                                <div className='space-y-4'>
                                    <div>
                                        <label className="block mb-1 font-medium">Food Name</label>
                                        <p className="p-2 border rounded bg-gray-100">{item.food_name}</p>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Food Category</label>
                                        <p className="p-2 border rounded bg-gray-100">
                                            {item.category?.category_name || 'No category'}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Price</label>
                                        <p className="p-2 border rounded bg-gray-100">
                                            Rs. {item.price}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Meal Type</label>
                                        <p className="p-2 border rounded bg-gray-100">{item.meal}</p>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium">Description</label>
                                        <p className="p-2 border rounded bg-gray-100">{item.food_description}</p>
                                    </div>
                                </div>

                                {/* Right: Image preview */}
                                <div>
                                    <label className="block mb-1 font-medium">Food Image</label>
                                    {item.food_image ? (
                                        <img
                                            src={`/storage/${item.food_image}`}
                                            alt="Preview"
                                            className="mt-2 w-32 h-32 object-cover border rounded"
                                        />
                                    ) : (
                                        <p className="p-2 border rounded bg-gray-100">No image uploaded.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
