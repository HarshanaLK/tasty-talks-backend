import { PrimaryButton, PrimaryLink } from "@/Components/elements/buttons/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import UserEditModal from "./Partials/EditModal";

const bRoutes = (userId: string) => [
    {
        name: "Dashboard",
        hasArrow: true,
        link: route("admin.index"),
    },
    {
        name: "Users",
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

    const [showEditModal, setShowEditModal] = useState(false);


    return (
        <AdminLayout title={`${user.name}`} bRoutes={bRoutes(user.id)}>
            <Head title={`User View #${user.id}`} />
            <div className="mx-auto max-w-7xl">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800">
                        User Details
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                User ID
                            </label>
                            <p className="text-sm text-gray-800">{user.id}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                E-mail
                            </label>
                            <p className="text-sm text-gray-800">{user.email}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Name
                            </label>
                            <p className="text-sm text-gray-800">{user.name}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                ID Number
                            </label>
                            <p className="text-sm text-gray-800">
                                {user.id_number}
                            </p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Role
                            </label>
                            <p className="text-sm text-gray-800">{user.role}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Address
                            </label>
                            <p className="text-sm text-gray-800">
                                {user.address}
                            </p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Registered Date
                            </label>
                            <p className="text-sm text-gray-800">{user.created_at_human}</p>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Status
                            </label>
                            <p className="text-sm text-gray-800"> <StatsView status={user.status} /></p>
                        </div>
                        <div>
                            <PrimaryButton onClick={() => setShowEditModal(true)}>Edit</PrimaryButton>
                        </div>

                    </div>
                </div>
            </div>
            <UserEditModal
                user={user}
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
            />
        </AdminLayout>
    );
}


function StatsView({ status }: { status: string }) {
    switch (status) {
        case "active":
            return (
                <span className="text-green-600 bg-green-50 px-2 py-[2px]">
                    Active
                </span>
            );
        case "inactive":
            return (
                <span className="text-gray-600 bg-gray-100 px-2 py-1">
                    Inactive
                </span>
            );
        case "draft":
            return (
                <span className="text-gray-600 bg-gray-100 px-2 py-1">
                    draft
                </span>
            );
    }
}
