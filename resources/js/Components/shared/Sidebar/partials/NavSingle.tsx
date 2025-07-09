import { Link, usePage } from "@inertiajs/react";
import DynamicHeroIcon from "@/Components/elements/icons/DynamicHeroIcon";
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function NavSingle({
    startWith,
    routeName,
    name,
    icon,
}: {
    startWith?: string;
    routeName?: any;
    name: any;
    icon: any;
}) {
    const { url } = usePage();

    function isActive(startWith?: string) {
        if (startWith == "/") {
            return url == startWith;
        } else {
            return url.startsWith(startWith ?? "");
        }
    }

    return (
        <div className="py-1">
            <Link
                href={routeName}
                className={classNames(
                    isActive(startWith)
                        ? " text-white shadow bg-primary "
                        : "text-white cursor-pointer hover:shadow hover:bg-primary ",
                    " group mt-0 flex p-3 rounded-lg items-center text-sm font-medium  duration-300 ease-in-out transition-all w-full "
                )}
                aria-current={isActive(startWith) ? "page" : undefined}
            >
                <DynamicHeroIcon
                    icon={icon}
                    className={classNames(
                        isActive(startWith)
                            ? "active text-white group-hover:text-white "
                            : "text-white group-hover:text-white duration-300 ease-in-out transition-all",
                        " mr-4 h-4 w-4 flex-shrink-0 "
                    )}
                    aria-hidden="true"
                />
                <span className="text">{name}</span>
            </Link>
        </div>
    );
}
