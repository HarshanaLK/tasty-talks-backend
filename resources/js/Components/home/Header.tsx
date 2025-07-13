import { Link, usePage } from "@inertiajs/react";
import { FaUserCircle } from "react-icons/fa"; // You can change the icon if you want

export default function Header() {
    const { auth } = usePage().props as {
        auth: { user: any };
    };

    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-2xs bg-white sticky top-0 z-50">
            <Link href="/">
                <h1 className="text-2xl font-bold text-green-600">TastyTalks</h1>
            </Link>

            <div>
                <input
                    type="text"
                    placeholder="Search in TastyTalks"
                    className="px-4 py-2 rounded-full border border-gray-300 w-xl"
                />
            </div>

            <div className="flex items-center gap-4">
                {!auth.user ? (
                    <>
                        <Link href="/login" className="text-sm text-gray-600 hover:text-black">
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="bg-black text-white px-4 py-2 rounded-full text-sm"
                        >
                            Sign up
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/profile" className="text-gray-700 hover:text-black text-2xl">
                            <FaUserCircle />
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
