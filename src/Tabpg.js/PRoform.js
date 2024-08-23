import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


const PRoform = () => {
  return (
    <div className='mt-5'>
         <div className="border-2">
        <div className="flex m-3 ">
          <div className="w-2/4 h-56  border-2 rounded">
            <p className="h-10 bg-violet-500 pl-4 pt-2"> Proform Name</p>
          </div>
          <div className="w-2/4 h-56 ml-3 border-2 rounded">
            <p className="h-10 bg-violet-500 pl-4 pt-2"> Invoice Id</p>
          </div>
        </div>
        <div className="flex mb-3 ml-5">
          <div   class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <PlusCircleIcon className="w-5 h-5 mx-auto" />
            <p className="ml-2">Add Profoma</p>
          </div>
          <div  class="focus:outline-none text-white bg-green-700 ml-10 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <MagnifyingGlassIcon className="w-5 h-5 mx-auto" />
            <p className="text-center">View</p>
          </div>
          <div  class="focus:outline-none text-white bg-green-700 ml-64 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <MagnifyingGlassIcon className="w-5 h-5 mx-auto" />
            <p className="text-center">View</p>
          </div>
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
  )
}

export default PRoform