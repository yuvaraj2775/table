import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  BanknotesIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { IoIosContacts } from "react-icons/io";

const navigation = [
  { name: "Dashboard", href: "Home", icon: HomeIcon, current: false },

  { name: "Company Details", href: "/", icon: CalendarIcon, current: false },
  {
    name: "Other Details",
    href: "Other",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Contacts", href: "Contact", icon: UsersIcon, current: false },
  { name: "Purchase Order", href: "Purchaseorder", icon: BanknotesIcon, current: false },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [nav, setnav] = useState("Dashboard");
  const handlechange = (navvalue) => {
    setnav(navvalue);
  };
  return (
    <div className="flex grow  w-52 h-screen flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-slate-200 px-6">
      <div className="flex h-16 w-2/5 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      onClick={() => handlechange(item.name)}
                      className={classNames(
                        item.name == nav ? "bg-gray-50" : "hover:bg-gray-50 focus:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-gray-400"
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400"
                        />
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="ml-auto h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            {/* 44px */}
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700"
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// `text-xl  cursor-pointer font-semibold   border-b-2 ${value === 'classes' ? 'border-blue-500 py-6 text-blue-500'  : ''}  `
