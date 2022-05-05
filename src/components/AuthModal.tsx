import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { IoIosClose, IoIosCloud } from "react-icons/io";
import { anonSupabaseClient } from "../lib/initSupabase";

const AuthModal = ({
  show = false,
  onClose,
}: {
  show: boolean;
  onClose?: () => void;
}) => {
  const closeModal = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:rounded-md max-w-md relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 shrink-0 p-1 rounded-md hover:bg-gray-100 transition focus:outline-none"
              >
                <IoIosClose className="h-5 w-5" />
              </button>
              <div className="py-12">
                <div className="px-4 sm:px-12">
                  <div className="flex justify-center">
                    <Link href="/">
                      <a className="flex items-center space-x-1">
                        <IoIosCloud className="shrink-0 w-8 h-8 text-slate-500" />
                        <span>clepsammia</span>
                      </a>
                    </Link>
                  </div>
                  {/* <Auth
                    supabaseClient={anonSupabaseClient}
                    providers={[]}
                    view="sign_in"
                  /> */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;
