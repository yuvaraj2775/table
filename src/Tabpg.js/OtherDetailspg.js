import React from "react";

import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";


const OtherDetailspg = () => {
  return (
    <div className="mt-5">
    
    <div className="border-2 rounded pl-5  pt-3">
        <p className="mb-3">OtherCharges[RS];</p>
        <div className="mb-3 grid grid-cols-2 ">
          <label htmlFor="">Insurance</label>
          <input
            type="text"
            className="border-2 mr-5 -ml-96 w-96  h-10 rounded"
            name=""
            id=""
          />
        </div>
        <div className="mb-3 grid grid-cols-2">
          <label htmlFor="">Packing</label>
          <input type="text" className="border-2 w-96 -ml-96 mr-5 h-10 rounded" />
        </div>
        <div className="mb-3 grid grid-cols-2">
          <label htmlFor="">Freight</label>
          <input
            type="text"
            className="border-2 mr-5 h-10 w-96 -ml-96 rounded"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="flex justify-around mt-5">
        <div className="flex ">
          <label htmlFor="" className="ml-3">
            Tax
          </label>
          <input type="text" name="" className="border-2 ml-10 h-10 rounded" id="" />
        </div>

        <div className="flex">
          <label htmlFor="" className="">
            + Others
          </label>
          <input type="text" name="" className="border-2 ml-10 h-10 rounded" id="" />
        </div>
        <div className="flex">
          <label htmlFor="" className="">
            {" "}
            + Grand Total
          </label>
          <input type="text" name="" className="border-2 ml-10 h-10 rounded" id="" />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="rounded-md   border  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusCircleIcon className="w-5 h-5" />
          <p>New Order</p>
        </div>
        <div className="rounded-md  h-16 w-28 border  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <BookmarkIcon className="w-5 h-5" />
          <p>Save</p>
        </div>
        <div className="rounded-md  h-16 w-28 border  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PencilSquareIcon className="w-5 h-5" />
          <p>Edit</p>
        </div>
        <div className="  rounded-md  h-16 w-28 border  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <TrashIcon className="h-5 w-5" />
          <p>Delete</p>
        </div>
        <div className="rounded-md  h-16 w-28 border  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PrinterIcon className="w-5 h-5" />
          <p>Print</p>
        </div>
        <div className="w-40 h-10 border-2 rounded-2xl bg-green-300 text-white cursor-pointer hover:bg-violet-600 mt-3 text-center">
          <button className="mt-1"> Convert Order</button>
        </div>
      </div>
    </div>
  );
};

export default OtherDetailspg;