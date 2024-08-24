import { useState } from "react";


import MYprofilepg1 from "./MYprofilepg1";
import Database from "../Sett;g/Database";
import Common from "../Sett;g/Common";
import Configure from "../Sett;g/Configure";
import { Description } from "@headlessui/react";
import REbort from "../Sett;g/REbort";
import DEScription from "../Sett;g/DEScription";
import FFormat from "../Sett;g/FFormat";

const tabs = [
    { name: 'Database', href: '#', current: false },
    { name: 'Common Settings', href: '#', current: false },
    { name: 'Configure Setting', href: '#', current: true },
    { name: 'ISO Report Format', href: '#', current: false },
    { name: 'Description Details', href: '#', current: false },
    { name: 'ISO Format', href: '#', current: false },

  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Settings() {
    const [tabss, settab] = useState(null);

    const handletab = (tabValue) => {
      settab(tabValue);
    };
    return (
      <div  className="mt-10">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            defaultValue={tabs.find((tab) => tab.current).name}
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav aria-label="Tabs" className="flex space-x-4">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={()=>handletab(tab.name)}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tabss==tab.name ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
        {tabss=="Database" &&(
            <div>
               <Database/>
            </div>
        )}
         {tabss=="Common Settings" &&(
            <div>
               <Common/>
            </div>
        )}
         {tabss=="Configure Setting" &&(
            <div>
               <Configure/>
            </div>
        )}
         {tabss=="ISO Report Format" &&(
            <div>
               <REbort/>
            </div>
        )}
         {tabss=="Description Details" &&(
            <div>
               <DEScription/>
            </div>
        )}
         {tabss=="ISO Format" &&(
            <div>
               <FFormat/>
            </div>
        )}
      
      

      </div>
    )
  }