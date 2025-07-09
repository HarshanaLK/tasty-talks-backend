import { Info, LogOut } from "lucide-react";
import { Link } from "react-router-dom";


export default function AdminHeader() {
    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-2xs bg-black sticky top-0 z-10">
            <Link to={"/"}><h1 className="text-2xl font-bold text-green-600">TastyTalks</h1></Link>
            <div className="flex items-center gap-4">
                <Link to={"/login"} className="text-sm bg-black text-white">
                    <div className="flex gap-1">
                        <Info />Help
                    </div>
                </Link>
                <Link className="bg-black text-white px-4 py-2 rounded-full text-sm" to={"/register"}>
                    <div className="flex gap-1">
                        <LogOut />Logout
                    </div>
                </Link>
            </div>
        </header >
    );
}
