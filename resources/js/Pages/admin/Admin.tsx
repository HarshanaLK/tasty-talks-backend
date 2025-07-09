import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

const bRoutes = [
    {
        name: "Dashboard",
        hasArrow: true,
        link: route("dashboard"),
    },
];


export default function Admin() {


    return (
        <AdminLayout title={"Dashboard"} bRoutes={bRoutes}>
            <Head title="Dashboard" />
            <div >
                    <h1 className="text-2xl font-semibold mb-4">Users Details</h1>

                    {/* Search bar */}

            </div>
        </AdminLayout>
    );
}
