import { Link } from "@inertiajs/react";
import { ButtonHTMLAttributes, useState } from "react";

export default function ConfirmButton({
    className = "",
    disabled,
    label,
    url,
    message,
    yesText,
    noText,
    ...props
}: {
    className?: string;
    disabled?: boolean;
    url: string;
    label: any;
    message?: string;
    yesText?: string;
    noText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {

    const [collapse, setCollapse] = useState(false);

    return (
        <div
            className={
                (collapse == true ? 'pl-4 ' : 'w-[auto] !bg-white') +
                ' inline-flex rounded-md bg-red-100 transition-all duration-300 ease-in-out'
            }
        >
            {collapse && (
                <span className="mr-4 self-center text-red-900">
                    Are you sure?
                </span>
            )}
            <div className="ml-auto">
                {collapse && (
                    <Link
                        method="delete"
                        href={url}
                        as="button"
                        className="inline-flex items-center rounded-l-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700"
                    >
                        Yes
                    </Link>
                )}
                <span
                    onClick={() => setCollapse(!collapse)}
                    className={
                        `${
                            collapse
                                ? 'rounded-r-md bg-slate-600 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-700 '
                                : 'rounded-md bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 '
                        } inline-flex cursor-pointer items-center border border-transparent px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out focus:ring-offset-2 ${
                            disabled && 'opacity-25'
                        } ` + className
                    }
                >
                    <span>{collapse ? 'No' : label}</span>
                </span>
            </div>
        </div>
    );
}
