import { Auth, Icon, IconChevronDown, IconUser } from "@supabase/ui";
import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import { IoIosExit, IoIosHome, IoIosHourglass } from "react-icons/io";
import { anonSupabaseClient } from "../lib/initSupabase";
import AuthModal from "./AuthModal";

const menuItems = [
  {
    label: "home",
    icon: IoIosHome,
    href: "/",
  },
  {
    label: "logout",
    icon: IoIosExit,
    onClick: () => anonSupabaseClient.auth.signOut(),
  },
];

const Layout: React.FC<{ children: JSX.Element; title?: string }> = ({
  children,
  title = "sandbox hourglass | clepsammia",
}) => {
  const { user, session } = Auth.useUser();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  /* console.log({ session, user }); */
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="h-16 w-full shadow-md">
          <div className="h-full container mx-auto">
            <div className="h-full px-4 flex justify-between items-center space-x-4">
              <Link href="/">
                <a className="flex items-center space-x-1">
                  <IoIosHourglass size={25} />
                  <span>clepsammia</span>
                </a>
              </Link>
              {user ? (
                <Menu as="div" className="relative z-50">
                  <Menu.Button className="flex items-center space-x-px group">
                    <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                      <IconUser className="text-gray-400 w-6 h-6" />
                    </div>
                    <IconChevronDown className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-current" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-72 overflow-hidden mt-1 divide-y divide-gray-100 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="items-center flex space-x-2 py-4 px-4 mb-2">
                        <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                          <IconUser className="text-gray-400 w-6 h-6" />
                        </div>
                        <div className="flex flex-col truncate">
                          <span className="text-sm text-gray-500">
                            {user?.email}
                          </span>
                        </div>
                      </div>
                      <div className="py-2">
                        {menuItems.map(
                          ({ label, href, onClick, icon: Icon }) => (
                            <div
                              key={label}
                              className="px-2 last:border-t last:pt-2 last:mt-2"
                            >
                              <Menu.Item>
                                {href ? (
                                  <Link href={href}>
                                    <a className="flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100">
                                      <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                                      <span>{label}</span>
                                    </a>
                                  </Link>
                                ) : (
                                  <button
                                    className="w-full flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100"
                                    onClick={onClick}
                                  >
                                    <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                                    <span>{label}</span>
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          )
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <button
                  type="button"
                  onClick={openModal}
                  className="ml-4 px-4 py-1 rounded-md bg-slate-300 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600 focus:ring-opacity-50 text-white transition"
                >
                  log in
                </button>
              )}
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto">
          <div className="px-4 py-12">
            {typeof children === "function"
              ? (children as () => JSX.Element)() // TODO: add modal hook?
              : children}
          </div>
        </main>

        <AuthModal show={showModal} onClose={closeModal} />
      </div>
    </Fragment>
  );
};

export default Layout;
