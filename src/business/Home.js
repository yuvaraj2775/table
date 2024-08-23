import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Tabbro from "./Tabbro";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-xl	">Order Form</h1>
      <div className="grid grid-cols-2 mt-5">
        <div>
          <div className="grid grid-cols-2">
            <label htmlFor="">Order name</label>
            <input
              type="text"
              name=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Customer Name</label>
            <input
              type="text"
              name=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Customer Po Number</label>
            <input
              type="text"
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Customer</label>
            <input
              type="text"
              className="border-2 border-slate-200 h-10 w-60 rounded-lg "
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">HSN Code</label>
            <select
              name=""
              id=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
            ></select>
          </div>
        </div>
        <div className="ml-8">
          <div className="grid grid-cols-2 ">
            <label htmlFor="">Order Id</label>
            <input
              type="text"
              name=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Order Date</label>
            <input
              type="date"
              name=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Receiving Company</label>
            <select
              name=""
              id=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
            ></select>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <label htmlFor="">Type Of Work</label>
            <select
              name=""
              id=""
              className="border-2 border-slate-200 h-10 w-60 rounded-lg"
            ></select>
          </div>
          <div className="mt-3 ml-32">
            <button class="block w-3/5 rounded-3xl border border-transparent py-2 bg-green-600 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Order
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Tabbro/>
      </div>

     
    </div>
  );
};

export default Home;
