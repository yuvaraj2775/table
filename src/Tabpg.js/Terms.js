import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";

const Terms = () => {
  return (
    <div className='mt-5'>
         <div className='border-2 flex pl-10 '>
        <div className='mt-3 mb-3 '>
          <label htmlFor="" className='mt-3 mb-5'>Title</label>
          <input type="text" name="" className='border-2 block mb-5 rounded h-10' id="" />
          <input type="text" name="" className='border-2 block mb-5 rounded h-10' id="" />
          <input type="text" className='border-2 block mb-3 rounded h-10' name="" id="" />
        </div>
        <div className='mt-3 mb-3 ml-5'>
          <label htmlFor="" className='mt-3 mb-5'>Description</label>
          <div className='flex  '>
          <input type="text" name="" className='border-2 block mb-5 rounded h-10' id="" />
          <button class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ml-5 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get</button>
          </div>
          <div className='flex '>
          <input type="text" name="" className='border-2 block mb-5 rounded h-10' id="" />
          <button class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ml-5 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Set</button>
          </div>
         <div className='flex mb3'>
         <input type="text" className='border-2 block mb-3 rounded h-10' name="" id="" />
         <button class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ml-5 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Clear All</button>
         </div>
        </div>


      </div>

      <div className="grid-cols-3 grid mt-5">
        <div className="grid grid-cols-2 ">
          <label htmlFor="" className="ml-3">
            Tax
          </label>
          <input type="text" name="" className="border-2 h-10 rounded" id="" />
        </div>

        <div className="grid grid-cols-2">
          <label htmlFor="" className="ml-7">
            + Others
          </label>
          <input type="text" name="" className="border-2 h-10 rounded" id="" />
        </div>
        <div className="grid grid-cols-2">
          <label htmlFor="" className="ml-7">
            {" "}
            + Grand Total
          </label>
          <input type="text" name="" className="border-2 h-10 rounded" id="" />
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

export default Terms