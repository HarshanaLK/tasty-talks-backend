import { FC, useState } from "react";
import NavItem from "./partials/NavItem";
import { User } from "@/types";
import { navigationLinks } from "@/lib/SideNavLinks";

interface ISidebar {
    user: User;
}

const Sidebar: FC<ISidebar> = ({ user }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-[56px] lg:flex lg:w-[260px] lg:flex-col h-[100vh] fixed left-0 top-0 bottom-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-grow flex-col overflow-y-auto bg-secondary pb-4 pl-4 pr-3 pt-0 sticky">
                    <nav
                        className="overflow-revert scrollbar-track-rounded-full sticky scrollbar-thumb-rounded-full flex flex-1 flex-col overscroll-auto scroll-smooth scrollbar-thin "
                        aria-label="Sidebar"
                    >
                        <div className="pt-8 overflow-auto h-[85vh]">
                            {navigationLinks.map((item: any, index: number) => (
                                <NavItem
                                    key={item.name + index}
                                    name={item.name}
                                    routeName={route(item.route)}
                                    startWith={item.startWith}
                                    icon={item.icon}
                                    link={item.link}
                                    border={item.border}
                                    children={item.children}
                                />
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default Sidebar;
