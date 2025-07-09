import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Breadcrumbs = (props: { routes: any }) => {
    return (
        <div className="">
            <nav className="flex self-center" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-1">
                    <li className="flex self-center">
                        <HomeIcon className="h-3 w-3 flex-shrink-0 text-slate-500 lg:h-4 lg:w-4 self-center" />
                    </li>
                    {props?.routes?.map(
                        (
                            route: {
                                name: string;
                                hasArrow: boolean;
                                link: string;
                            },
                            index: any
                        ) => (
                            <li key={index} className="self-center">
                                <div className="flex self-center items-center">
                                    {route.hasArrow && (
                                        <ChevronRightIcon
                                            className="h-3 w-3 flex-shrink-0 self-center text-slate-500 lg:h-4 lg:w-4"
                                            aria-hidden="true"
                                        />
                                    )}
                                    <Link
                                        href={route.link}
                                        className={classNames(
                                            route.hasArrow
                                                ? "ml-1 lg:ml-2"
                                                : "",
                                            "text-[10px] self-center font-medium text-slate-500 hover:text-gray-600 lg:text-sm"
                                        )}
                                    >
                                        {route.name}
                                    </Link>
                                </div>
                            </li>
                        )
                    )}
                </ol>
            </nav>
        </div>
    );
};
export default Breadcrumbs;
