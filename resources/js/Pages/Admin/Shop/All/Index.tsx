import ConfirmButton from '@/Components/elements/buttons/ConfirmButton';
import { PrimaryLink } from '@/Components/elements/buttons/PrimaryButton';
import MasterTable, { TableBody, TableTd } from '@/Components/elements/tables/masterTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { ViewfinderCircleIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function Orders({ shops, filters }: { shops: any; filters: any }) {
    const tableColumns = [
        { label: "", sortField: "", sortable: false },
        { label: "ID", sortField: "id", sortable: true },
        { label: "Shop Name", sortField: "shop_name", sortable: true },
        { label: "Shop Address", sortField: "shop_address", sortable: true },
        { label: "Open Time", sortField: "open_time", sortable: true },
        { label: "Close Time", sortField: "close_time", sortable: true },
        { label: "Shop Status", sortField: "shop_status", sortable: true },
        { label: "Registered Date", sortField: "created_at", sortable: true },
    ];

    const search = {
        placeholder: "Search by ID or Shop Name",
    };

    const bRoutes = [
        {
            name: "Dashboard",
            hasArrow: true,
            link: route("dashboard"),
        },
        {
            name: "Shops",
            hasArrow: true,
            link: route("admin.index"),
        },
    ];

    console.log(shops);

    return (
        <AdminLayout title="Shops" bRoutes={bRoutes}>
            <Head title="Shops" />
            <div className="mx-auto mt-12 max-w-7xl">
                <MasterTable
                    tableColumns={tableColumns}
                    filters={filters}
                    url={route("shop.index")}
                    links={shops.links}
                    search={search}
                >
                    {shops.data?.length > 0 ? (
                        shops.data.map((user: any) => (
                            <TableBody
                                key={user.id}
                                buttons={
                                    <>
                                        <PrimaryLink
                                            href={route("admin.show", { id: user.id })}
                                        >
                                            <ViewfinderCircleIcon className="mr-2 h-4 w-4" />
                                            <span>View</span>
                                        </PrimaryLink>
                                        <ConfirmButton
                                            url={route("shop.destroy", { id: user.id })}
                                            label={
                                                <div className="flex">
                                                    <TrashIcon className="mr-2 h-4 w-4" />
                                                    <span className="text-sm">Delete</span>
                                                </div>
                                            }
                                        />
                                    </>
                                }
                            >
                                <TableTd>
                                    <div className="flex space-x-2 pr-1 mr-1">
                                        <p className="mt-1 break-words">{user.id}</p>
                                    </div>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">{user.shop_name}</p>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">{user.shop_address}</p>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">{user.open_time_formatted}</p>
                                </TableTd>
                                <TableTd>
                                    <p className="break-words">{user.close_time_formatted}</p>
                                </TableTd>
                                <TableTd>
                                    <ShopStatusView status={user.shop_status} />
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

export function ShopStatusView({ status }: { status: string }) {
    switch (status) {
        case "open":
            return (
                <span className="text-green-600 bg-green-50 px-2 py-[2px]">
                    Open
                </span>
            );
        case "closed":
            return (
                <span className="text-red-600 bg-red-100 px-2 py-1">
                    Closed
                </span>
            );
    }
}
