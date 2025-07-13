import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";
import { Fragment, ReactNode, useState } from "react";
import Breadcrumbs from "../elements/header/BreadCumbs";
import { navigationLinks } from "@/lib/SideNavLinks";
import NavItem from "./Sidebar/partials/NavItem";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({
  user,
  header,
  bRoutes,
}: {
  user: any;
  header?: ReactNode;
  bRoutes: any;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
      <>
          <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                  as="div"
                  className="relative z-[101] lg:hidden"
                  onClose={setSidebarOpen}
              >
                  <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-slate-900 bg-opacity-75" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-50 flex">
                      <Transition.Child
                          as={Fragment}
                          enter="transition ease-in-out duration-300 transform"
                          enterFrom="-translate-x-full"
                          enterTo="translate-x-0"
                          leave="transition ease-in-out duration-300 transform"
                          leaveFrom="translate-x-0"
                          leaveTo="-translate-x-full"
                      >
                          <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-secondary pb-4 pt-5">
                              <Transition.Child
                                  as={Fragment}
                                  enter="ease-in-out duration-300"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="ease-in-out duration-300"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                              >
                                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                                      <button
                                          type="button"
                                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                          onClick={() => setSidebarOpen(false)}
                                      >
                                          <span className="sr-only">
                                              Close sidebar
                                          </span>
                                          <XMarkIcon
                                              className="h-6 w-6 text-white"
                                              aria-hidden="true"
                                          />
                                      </button>
                                  </div>
                              </Transition.Child>
                              <nav
                                  className="mt-5 h-full flex-shrink-0  overflow-y-auto"
                                  aria-label="Sidebar"
                              >
                                  <div className="space-y-1 px-2">
                                      {user &&
                                          navigationLinks?.map(
                                              (item: any, index: number) => (
                                                  <NavItem
                                                      key={item.name + index}
                                                      name={item.name}
                                                      routeName={route(
                                                          item.route
                                                      )}
                                                      startWith={item.startWith}
                                                      icon={item.icon}
                                                      link={item.link}
                                                      border={item.border}
                                                      children={item.children}
                                                  />
                                              )
                                          )}
                                  </div>
                              </nav>
                          </Dialog.Panel>
                      </Transition.Child>
                      <div className="w-14 flex-shrink-0" aria-hidden="true">
                          {/* Dummy element to force sidebar to shrink to fit close icon */}
                      </div>
                  </div>
              </Dialog>
          </Transition.Root>
          <div className=" relative lg:fixed top-0 left-0 right-0 z-50 flex border-b bg-white">
              <header className="grid lg:flex w-full lg:justify-between lg:mx-auto py-3 md:py-0">
                  <div className="fixed z-50 top-0 left-0 right-0 lg:relative lg:top-0 lg:flex lg:flex-1 py-2 w-full">
                      <div className="relative w-full px-4 lg:px-0 justify-between lg:w-[260px] flex self-center items-center">
                          <Link href={route("dashboard")} className="px-2">
                              {/* <img
                                  className="w-full object-cover self-center bg-white rounded-lg"
                                  src={""}
                                  alt="site logo"
                              /> */}
                               <Link href={"/"} ><h1 className="text-3xl font-bold text-green-600 ml-4">TastyTalks</h1></Link>

                          </Link>
                          <button
                              type="button"
                              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent lg:hidden"
                              onClick={() => setSidebarOpen(true)}
                          >
                              <span className="sr-only">Open sidebar</span>
                              <Bars3CenterLeftIcon
                                  className="h-8 w-8 text-slate-900 self-center"
                                  aria-hidden="true"
                              />
                          </button>
                      </div>
                      <div className="hidden lg:block lg:ml-0 pl-12 space-y-1">
                          <Breadcrumbs routes={bRoutes} />
                          <h1 className="text-2xl text-gray-800 font-[900]">
                              {header}
                          </h1>
                      </div>
                  </div>
                  {/* Mobile */}
                  <div className="lg:ml-4 py-2 px-4 lg:bg-transparent flex lg:items-center justify-between">
                      {/* <div className="flex lg:hidden">
                          <Breadcrumbs routes={bRoutes} />
                      </div> */}
                      <div className="flex">
                          <Menu as="div" className="relative ml-3 self-center">
                              <div>
                                  <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-transparent group">
                                      <span className="ml-3 text-sm font-medium text-gray-700">
                                          <span className="sr-only">
                                              Open user menu for{" "}
                                          </span>
                                          <img
                                              className="w-10 h-10 rounded-full object-cover"
                                              src={user.avatar}
                                          />
                                      </span>
                                  </Menu.Button>
                              </div>
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="dropdown-menu absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <Menu.Item>
                                          {({ active }) => (
                                              <Link
                                                  href={route("profile.edit", {
                                                      user: user.id,
                                                  })}
                                                  className={classNames(
                                                      active
                                                          ? "bg-gray-100"
                                                          : "",
                                                      "block w-full px-4 py-2 text-left text-sm text-gray-700"
                                                  )}
                                              >
                                                  Profile
                                              </Link>
                                          )}
                                      </Menu.Item>
                                      <Menu.Item>
                                          {({ active }) => (
                                              <Link
                                                  href={route("logout")}
                                                  method={"post"}
                                                  as="button"
                                                  type="button"
                                                  className={classNames(
                                                      active
                                                          ? "bg-gray-100"
                                                          : "",
                                                      "block w-full px-4 py-2 text-left text-sm text-gray-700"
                                                  )}
                                              >
                                                  Logout
                                              </Link>
                                          )}
                                      </Menu.Item>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
                      </div>
                  </div>
              </header>
          </div>
      </>
  );
};
export default Header;
