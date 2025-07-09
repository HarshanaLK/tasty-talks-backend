import { useState, useMemo } from "react";
import AdminLayout from "../../layouts/AdminLayout";

type User = {
    id: number;
    userName: string;
    shopName: string;
    status: string;
    address: string;
    contact: string;
};

// Dummy data
const users: User[] = [
    { id: 1, userName: "John Doe", shopName: "Fresh Bites", status: "Active", address: "123 Main St", contact: "077-1234567" },
    { id: 2, userName: "Jane Smith", shopName: "Quick Eats", status: "Close", address: "456 Market Rd", contact: "078-9876543" },
    { id: 3, userName: "Alex Ray", shopName: "Sweet Spot", status: "Close", address: "789 Lake Ave", contact: "076-1122334" },
    { id: 4, userName: "Sam Lee", shopName: "Green Grill", status: "Active", address: "321 Forest Dr", contact: "070-9988776" },
    { id: 5, userName: "Maya Jay", shopName: "City Café", status: "Active", address: "654 Hilltop Blvd", contact: "075-4455667" },
    // Add more items as needed
];

export default function Admin() {
    const [search, setSearch] = useState("");
    const [sortColumn, setSortColumn] = useState<keyof User>("userName");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const filteredAndSortedUsers = useMemo(() => {
        let filtered = users.filter((user) =>
            Object.values(user).some((value) =>
                String(value).toLowerCase().includes(search.toLowerCase())
            )
        );

        filtered.sort((a, b) => {
            const valA = String(a[sortColumn]).toLowerCase();
            const valB = String(b[sortColumn]).toLowerCase();
            if (valA < valB) return sortOrder === "asc" ? -1 : 1;
            if (valA > valB) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        return filtered;
    }, [search, sortColumn, sortOrder]);

    const paginatedUsers = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredAndSortedUsers.slice(start, start + itemsPerPage);
    }, [filteredAndSortedUsers, currentPage]);

    const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);

    const handleSort = (column: keyof User) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto">
                <div className="p-6">
                    <h1 className="text-2xl font-semibold mb-4">Users Details</h1>

                    {/* Search bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-xs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 shadow-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left text-sm font-semibold">
                                    <th className="p-3 cursor-pointer" onClick={() => handleSort("userName")}>
                                        User Name {sortColumn === "userName" && (sortOrder === "asc" ? "↑" : "↓")}
                                    </th>
                                    <th className="p-3 cursor-pointer" onClick={() => handleSort("shopName")}>
                                        Shop Name {sortColumn === "shopName" && (sortOrder === "asc" ? "↑" : "↓")}
                                    </th>
                                    <th className="p-3 cursor-pointer" onClick={() => handleSort("address")}>
                                        Status {sortColumn === "status" && (sortOrder === "asc" ? "↑" : "↓")}
                                    </th>
                                    <th className="p-3 cursor-pointer" onClick={() => handleSort("contact")}>
                                        Contact Number {sortColumn === "contact" && (sortOrder === "asc" ? "↑" : "↓")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedUsers.map((user) => (
                                    <tr key={user.id} className="border-t text-sm">
                                        <td className="p-3">{user.userName}</td>
                                        <td className="p-3">{user.shopName}</td>
                                        <td className="p-3">
                                            <span
                                                className={`font-semibold ${user.status.toLowerCase() === "active"
                                                    ? "text-green-700 bg-green-300 px-2 rounded-2xl"
                                                    : user.status.toLowerCase() === "close"
                                                        ? "text-red-600 bg-red-300 px-2 rounded-2xl"
                                                        : ""
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-3">{user.contact}</td>
                                    </tr>
                                ))}

                                {paginatedUsers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center p-4">
                                            No results found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-end items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 border rounded bg-green-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 border rounded 
                                        ${currentPage === index + 1
                                        ? "bg-green-600 text-white font-semibold"
                                        : "bg-green-500 text-white hover:bg-green-600"}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 border rounded bg-green-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
