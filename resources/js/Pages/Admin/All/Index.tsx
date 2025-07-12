
import ConfirmButton from '@/Components/elements/buttons/ConfirmButton';
import { PrimaryLink } from '@/Components/elements/buttons/PrimaryButton';
import MasterTable, { TableBody, TableTd } from '@/Components/elements/tables/masterTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { ViewfinderCircleIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function Orders({ users, filters }: { users: any; filters: any }) {
    const tableColumns = [
        { label: "", sortField: "", sortable: false },
        { label: "ID", sortField: "id", sortable: true },
        { label: "Name", sortField: "first_name", sortable: true },
        { label: "Email", sortField: "email", sortable: false },
        { label: "Phone Number", sortField: "phone", sortable: true },
        { label: "Status", sortField: "status", sortable: true },
        { label: "Registered Date", sortField: "created_at", sortable: true },
    ];
    const search = {
        placeholder: "Search by ID, Customer Name ",
    };
    const bRoutes = [
        {
            name: "Dashboard",
            hasArrow: true,
            link: route("dashboard"),
        },
        {
            name: "Users",
            hasArrow: true,
            link: route("admin.index"),
        },
    ];

    console.log(users);

    return (
        <AdminLayout title="Users" bRoutes={bRoutes}>
            <Head title="Customers" />
            <div className="mx-auto mt-12 max-w-7xl">
                <MasterTable
                    tableColumns={tableColumns}
                    filters={filters}
                    url={route("admin.index")}
                    links={users.links}
                    search={search}
                >
                    {users.data?.length > 0 ? (
                        users.data?.map((user: any) => (
                            <TableBody
                                key={user.id}
                                buttons={
                                    <>
                                        <PrimaryLink
                                            href={route("", {
                                                id: user.id,
                                            })}
                                        >
                                            <ViewfinderCircleIcon className="mr-2 h-4 w-4" />
                                            <span>View</span>
                                        </PrimaryLink>
                                        <ConfirmButton
                                            url={route("", {
                                                id: user.id,
                                            })}
                                            label={
                                                <div className="flex">
                                                    <TrashIcon className="mr-2 h-4 w-4" />
                                                    <span className="text-sm">
                                                        Delete
                                                    </span>
                                                </div>
                                            }
                                        />
                                    </>
                                }
                            >
                                <TableTd>
                                    <div className="flex space-x-2 pr-1 mr-1">
                                        <p className="mt-1 break-words">
                                            {user.id}
                                        </p>
                                    </div>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">
                                        {user.name}
                                    </p>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">
                                        {user.email}
                                    </p>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">
                                        {user.role ?? '-'}
                                    </p>
                                </TableTd>
                                <TableTd>
                                    <CustomerStatsView
                                        status={user.status}
                                    />
                                </TableTd>
                                <TableTd>{user.created_at_human}</TableTd>
                            </TableBody>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={tableColumns.length}
                                className="p-4 text-center text-gray-500"
                            >
                                No data found
                            </td>
                        </tr>
                    )}
                </MasterTable>
            </div>
        </AdminLayout>
    );
}


export function CustomerStatsView({ status }: { status: string }) {
    switch (status) {
        case "draft":
            return (
                <span className="text-gray-600 bg-gray-50 px-2 py-[2px]">
                    Draft
                </span>
            );
        case "active":
            return (
                <span className="text-green-600 bg-green-50 px-2 py-[2px]">
                    Active
                </span>
            );
        case "inactive":
            return (
                <span className="text-red-600 bg-red-100 px-2 py-1">
                    Inactive
                </span>
            );
    }
}
