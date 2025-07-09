import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';

import { FaStar } from 'react-icons/fa';

export default function ShopHome() {
    const [shopData, setShopData] = useState({
        name: 'KFC - Colombo',
        description: 'sadasd dsadas asdas das dasdasda',
        category: 'American, Burgers, Hot Dog',
        address: '45 King St, Colombo',
        location: '',
        isOpen: false,
        logoImage: null as File | null,
        coverImage: null as File | null,
    });

    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [coverPreview, setCoverPreview] = useState<string | null>(null);

    const handleShopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShopData({ ...shopData, [e.target.name]: e.target.value });
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setShopData(prev => ({ ...prev, logoImage: file }));
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setShopData(prev => ({ ...prev, coverImage: file }));
            setCoverPreview(URL.createObjectURL(file));
        }
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('name', shopData.name);
        formData.append('address', shopData.address);
        formData.append('location', shopData.location);
        formData.append('description', shopData.description);
        formData.append('category', shopData.category);
        formData.append('isOpen', String(shopData.isOpen));
        if (shopData.logoImage) {
            formData.append('logoImage', shopData.logoImage);
        }
        if (shopData.coverImage) {
            formData.append('coverImage', shopData.coverImage);
        }

        console.log('FormData ready to send:', formData);
    };

    return (
        <AdminLayout  title={'Shop Details'} bRoutes={undefined}>
            <div className="max-w-7xl mx-auto">
                {/* TopBar section */}
                <div className="p-4 flex justify-between items-center mt-5 w-full">
                    <div>
                        <h2 className="text-xl font-semibold">{getGreeting()}, Jen</h2>
                        <p className="text-sm text-gray-600 inline-flex items-center">
                            <FaStar className="text-black mr-1" /> 4.5 - <span className='ml-1'> {shopData.name}</span>
                        </p>
                    </div>

                    {/* Shop Status Toggle */}
                    <div className="flex items-center gap-6 ">
                        {/* Status Indicator */}
                        <div>
                            <label htmlFor="isOpen" className="block mb-1 font-medium text-sm">
                                Shop Status
                            </label>
                            <div className="flex items-center space-x-2">
                                <span className="relative flex h-3 w-3">
                                    <span
                                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${shopData.isOpen ? 'bg-green-400' : 'bg-red-400'}`}
                                    ></span>
                                    <span
                                        className={`relative inline-flex rounded-full h-3 w-3 ${shopData.isOpen ? 'bg-green-500' : 'bg-red-500'}`}
                                    ></span>
                                </span>
                                <span
                                    className={`text-sm font-semibold w-20 inline-block text-left ${shopData.isOpen ? 'text-green-700' : 'text-red-700'
                                        }`}
                                >
                                    {shopData.isOpen ? 'Open Now' : 'Closed'}
                                </span>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={shopData.isOpen}
                                onChange={() =>
                                    setShopData(prev => ({ ...prev, isOpen: !prev.isOpen }))
                                }
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>


                {/* Shop edit section */}
                <div className="max-w-7xl mx-auto p-6 space-y-6">
                    <h1 className="text-2xl font-bold">Edit Shop Info</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Shop Name */}
                        <div className="w-full">
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border rounded"
                                value={shopData.name}
                                onChange={handleShopChange}
                                placeholder="Shop Name"
                            />
                        </div>

                        {/* Address */}
                        <div className="w-full">
                            <label htmlFor="address" className="block mb-1 font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full p-2 border rounded"
                                value={shopData.address}
                                onChange={handleShopChange}
                                placeholder="Address"
                            />
                        </div>

                        {/* Location */}
                        <div className="w-full">
                            <label htmlFor="location" className="block mb-1 font-medium">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="w-full p-2 border rounded"
                                value={shopData.location}
                                onChange={handleShopChange}
                                placeholder="Location"
                            />
                        </div>

                        {/* Description */}
                        <div className="w-full">
                            <label htmlFor="description" className="block mb-1 font-medium">
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="w-full p-2 border rounded"
                                value={shopData.description}
                                onChange={handleShopChange}
                                placeholder="Description"
                            />
                        </div>

                        {/* Category */}
                        <div className="w-full">
                            <label htmlFor="category" className="block mb-1 font-medium">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                className="w-full p-2 border rounded"
                                value={shopData.category}
                                onChange={handleShopChange}
                                placeholder="Category"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Logo Upload */}
                        <div className="mt-4 w-full">
                            <label className="block mb-1 font-medium">Shop Logo Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="p-2 border rounded w-full"
                            />
                            {logoPreview && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 mb-2">Logo Preview:</p>
                                    <img
                                        src={logoPreview}
                                        alt="Logo Preview"
                                        className="w-full max-w-sm rounded-xl border"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Cover Upload */}
                        <div className="mt-4 w-full">
                            <label className="block mb-1 font-medium">Shop Cover Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleCoverChange}
                                className="p-2 border rounded w-full"
                            />
                            {coverPreview && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 mb-2">Cover Preview:</p>
                                    <img
                                        src={coverPreview}
                                        alt="Cover Preview"
                                        className="w-full max-w-sm rounded-xl border"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="px-6 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700"
                            onClick={handleSave}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
