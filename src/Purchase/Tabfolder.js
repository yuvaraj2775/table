import { useState } from "react";
import Projectdetailspg from "./tabval/Projectdetailspg";
import Taxdetailpg from "./tabval/Taxdetailpg";


const tabs = [
    { name: 'Project Details', href: '#', current: false },
    { name: 'Tax/Other Details', href: '#', current: false },
    { name: 'Comments', href: '#', current: true },
    { name: 'Details', href: '#', current: false },

  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabfolder() {
    const [tabss, settab] = useState(null);

    const handletab = (tabValue) => {
      settab(tabValue);
    };
    return (
      <div>
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
        {tabss=="Project Details" &&(
            <div>
                <Projectdetailspg/>
            </div>
        )}
         {tabss=="Tax/Other Details" &&(
            <div>
                <Taxdetailpg/>
            </div>
        )}
         
         
      </div>
    )
  }