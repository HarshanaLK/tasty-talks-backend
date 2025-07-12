import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { BsPerson } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const bRoutes = (userId: string) => [
    {
        name: "Dashboard",
        hasArrow: true,
        link: route("admin.index"),
    },
    {
        name: "Customers",
        hasArrow: true,
        link: route("admin.index"),
    },
    {
        name: `View: #${userId}`,
        hasArrow: true,
        link: "",
    },
];

export default function Show({ user }: { user: any }) {
    console.log(user);
    return (
        <AdminLayout title={`${user.name}`} bRoutes={bRoutes(user.id)}>
            <Head title={`user View #${user.id}`} />
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-7">


                    {/* user */}
                    <div className="md:col-span-2">
                        <div className="grid gap-6">
                            <div className="p-4 border rounded bg-white h-fit">
                                <h2 className="text-lg font-bold">User</h2>
                                {user && (
                                    <div className="flex-col space-y-4">
                                        <div className="flex items-center space-x-2 border-b">
                                            <BsPerson className="h-5 w-5 text-gray-500" />
                                            <span>{user.name}</span>
                                        </div>
                                        <p className="">
                                            <strong>Contact Info</strong>
                                        </p>
                                        <div className="flex flex-col space-y-2 pb-2 border-b">
                                            {/* Email */}
                                            <div className="flex items-center space-x-2">
                                                <CgMail className="h-5 w-5 text-gray-500" />
                                                <span>{user.email}</span>
                                            </div>
                                        </div>
                                        <p>
                                            <strong>Shipping Address</strong>
                                        </p>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
