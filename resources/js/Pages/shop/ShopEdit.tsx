import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { FaStar } from 'react-icons/fa';

interface ShopHomeProps {
    shop: {
        shop_name?: string | null;
        shop_address?: string | null;
        location?: string | null;
        open_time?: string | null;
        close_time?: string | null;
        shop_status?: 'open' | 'closed' | null;
        description?: string | null;
        rating?: number | null;
        logo_url?: string | null;
        cover_url?: string | null;
        logo:string;
        cover:string;
    };
}

export default function ShopHome({ shop }: ShopHomeProps) {
    const { data, setData, post, processing, errors } = useForm({
        shop_name: shop.shop_name ?? '',
        shop_address: shop.shop_address ?? '',
        location: shop.location ?? '',
        open_time: shop.open_time ?? '',
        close_time: shop.close_time ?? '',
        shop_status: shop.shop_status ?? 'closed',
        description: shop.description ?? '',
        rating: shop.rating ?? 0,
        logo: null as File | null,
        cover: null as File | null,
    });

   

    const [logoPreview, setLogoPreview] = useState<string | null>(
        shop.logo_url ?? (shop.logo ? `/storage/${shop.logo}` : null)
    );
    const [coverPreview, setCoverPreview] = useState<string | null>(
        shop.cover_url ?? (shop.cover ? `/storage/${shop.cover}` : null)
    );
    const handleShopChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setData(name as keyof typeof data, type === 'number' ? parseFloat(value) : value);
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            setData('logo', file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            setData('cover', file);
            setCoverPreview(URL.createObjectURL(file));
        }
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    const handleSave = () => {
        post('/shops/save', {
            forceFormData: true,
        });
    };



    return (
        <AdminLayout title={'Shop Details'} bRoutes={undefined}>

            <div className="max-w-7xl mx-auto">
                <div className="p-4 flex justify-between items-center mt-5 w-full">
                    <div>
                        <h2 className="text-xl font-semibold">{getGreeting()}, Jen</h2>
                        <p className="text-sm text-gray-600 inline-flex items-center">
                            <FaStar className="text-black mr-1" /> 4.5 -{' '}
                            <span className="ml-1">{shop.shop_name}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div>
                            <label htmlFor="shop_status" className="block mb-1 font-medium text-sm">
                                Shop Status
                            </label>
                            <div className="flex items-center space-x-2">
                                <span className="relative flex h-3 w-3">
                                    <span
                                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${data.shop_status === 'open' ? 'bg-green-400' : 'bg-red-400'
                                            }`}
                                    />
                                    <span
                                        className={`relative inline-flex rounded-full h-3 w-3 ${data.shop_status === 'open' ? 'bg-green-500' : 'bg-red-500'
                                            }`}
                                    />
                                </span>
                                <span
                                    className={`text-sm font-semibold w-20 inline-block text-left ${data.shop_status === 'open' ? 'text-green-700' : 'text-red-700'
                                        }`}
                                >
                                    {data.shop_status === 'open' ? 'Open Now' : 'Closed'}
                                </span>
                            </div>
                        </div>

                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={data.shop_status === 'open'}
                                onChange={() =>
                                    setData('shop_status', data.shop_status === 'open' ? 'closed' : 'open')
                                }
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
                        </label>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto p-6 space-y-6">
                    <h1 className="text-2xl font-bold">Edit Shop Info</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Shop Name */}
                        <div className="w-full">
                            <label htmlFor="shop_name" className="block mb-1 font-medium">Shop Name</label>
                            <input
                                type="text"
                                id="shop_name"
                                name="shop_name"
                                className="w-full p-2 border rounded"
                                value={data.shop_name}
                                onChange={handleShopChange}
                            />
                            {errors.shop_name && <p className="text-red-500 text-sm">{errors.shop_name}</p>}
                        </div>

                        {/* Shop Address */}
                        <div className="w-full">
                            <label htmlFor="shop_address" className="block mb-1 font-medium">Shop Address</label>
                            <input
                                type="text"
                                id="shop_address"
                                name="shop_address"
                                className="w-full p-2 border rounded"
                                value={data.shop_address}
                                onChange={handleShopChange}
                            />
                            {errors.shop_address && <p className="text-red-500 text-sm">{errors.shop_address}</p>}
                        </div>

                        {/* Location */}
                        <div className="w-full">
                            <label htmlFor="location" className="block mb-1 font-medium">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="w-full p-2 border rounded"
                                value={data.location}
                                onChange={handleShopChange}
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                        </div>

                        {/* Open Time */}
                        <div className="w-full">
                            <label htmlFor="open_time" className="block mb-1 font-medium">Open Time</label>
                            <input
                                type="time"
                                id="open_time"
                                name="open_time"
                                className="w-full p-2 border rounded"
                                value={data.open_time}
                                onChange={handleShopChange}
                            />
                            {errors.open_time && <p className="text-red-500 text-sm">{errors.open_time}</p>}
                        </div>

                        {/* Close Time */}
                        <div className="w-full">
                            <label htmlFor="close_time" className="block mb-1 font-medium">Close Time</label>
                            <input
                                type="time"
                                id="close_time"
                                name="close_time"
                                className="w-full p-2 border rounded"
                                value={data.close_time}
                                onChange={handleShopChange}
                            />
                            {errors.close_time && <p className="text-red-500 text-sm">{errors.close_time}</p>}
                        </div>



                        {/* Rating */}
                        <div className="w-full">
                            <label htmlFor="rating" className="block mb-1 font-medium">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                className="w-full p-2 border rounded"
                                min={0}
                                max={5}
                                step={0.1}
                                value={data.rating}
                                onChange={handleShopChange}
                            />
                            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
                        </div>

                        {/* Description */}
                        <div className="w-full md:col-span-2">
                            <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full p-2 border rounded"
                                value={data.description}
                                onChange={handleShopChange}
                                rows={3}
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                    </div>

                    {/* Logo Upload */}
                    <div className="mt-4 w-full md:max-w-md">
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
                                <img src={logoPreview} alt="Logo Preview" className="w-full max-w-sm rounded-xl border" />
                            </div>
                        )}
                        {errors.logo && <p className="text-red-500 text-sm">{errors.logo}</p>}
                    </div>

                    {/* Cover Upload */}
                    <div className="mt-4 w-full md:max-w-md">
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
                                <img src={coverPreview} alt="Cover Preview" className="w-full max-w-sm rounded-xl border" />
                            </div>
                        )}
                        {errors.cover && <p className="text-red-500 text-sm">{errors.cover}</p>}
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            className="px-6 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700"
                            onClick={handleSave}
                            disabled={processing}
                        >
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
