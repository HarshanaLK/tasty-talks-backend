import {
  Home,
  Utensils,
} from "lucide-react";
import { Link, useLocation, matchPath } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: <Home />, to: "/user/:id/shop" },
  { label: "Menu", icon: <Utensils />, to: "/user/:id/menu" },
];

const Sidebar = () => {
  const location = useLocation();
  const userId = "123"; // Replace this with actual logged-in user ID

  const isActive = (path: string) =>
    matchPath({ path: path.replace(":id", userId), end: false }, location.pathname);

  return (
    <aside className="min-w-64 h-screen bg-white shadow px-2 py-3 border-r fixed">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const fullPath = item.to.replace(":id", userId);
          return (
            <Link
              to={fullPath}
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer text-lg ${
                isActive(item.to) ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
