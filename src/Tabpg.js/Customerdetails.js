import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";


const Customerdetails = () => {
  return (
    <div>
          <div className="border-2 rounded shadow-black mt-10">
          <div class="flex flex-col gap-5 p-5">
  <div class="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
    <h1 class="font-bold text-xl mb-4">Delivery Address</h1>
    <div class="border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Street 1</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Street 2</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Street 3</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
      </div>
    </div>
  </div>

  
  <div class="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
    <h1 class="font-bold text-xl mb-4">Billing Amount</h1>
    <div class="border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Amount 1</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Amount 2</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div class="flex flex-col mb-3">
          <label class="block text-sm font-medium text-gray-700">Amount 3</label>
          <input
            type="text"
            class="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
      </div>
    </div>
  </div>
</div>


      <h1 className="font-bold ml-5 text-violet-500 mt-10">Contacts Personal Details</h1>
      <div className="grid grid-cols-3 mx-3 mb-3 mt-5">
        <div>
          <label htmlFor="">Contact person</label>
          <input type="text" className="border-2 h-10 rounded ml-3" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" className="border-2 h-10 rounded ml-3" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Contact No</label>
          <input type="text" className="border-2 h-10 rounded ml-3" name="" id="" />
        </div>

      </div>

      </div >
      <div className="flex justify-around mt-5">
        <div className="flex ">
          <label htmlFor="" className="ml-3">
            Tax
          </label>
          <input type="text" name="" className="border-2 h-10 ml-10 rounded" id="" />
        </div>

        <div className="flex ml-10">
          <label htmlFor="" className="">
            + Others
          </label>
          <input type="text" name="" className="border-2 ml-10 h-10 rounded" id="" />
        </div>
        <div className="flex ml-10">
          <label htmlFor="" className="ml-7">
            {" "}
            + Grand Total
          </label>
          <input type="text" name="" className="border-2 ml-10 h-10 rounded" id="" />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="text-white bg-gradient-to-r flex justify-center items-center from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center h-14  ">
          <PlusCircleIcon className="w-5  h-5" />
          <p className="ml-1">New Order</p>
        </div>
        <div className="text-white flex justify-center items-center w-28 bg-orange-300 rounded ">
          <BookmarkIcon className="w-5  h-5" />
          <p className="ml-1">Save</p>
        </div>
        <div className="text-white bg-gradient-to-r flex justify-center items-center w-28 bg-blue-600 rounded ">
          <PencilSquareIcon className="w-5  h-5" />
          <p className="ml-1">Edit</p>
        </div>
        <div className="text-white bg-gradient-to-r flex justify-center items-center w-28 bg-red-800 rounded ">
          <TrashIcon className="h-5  w-5" />
          <p className="ml-1">Delete</p>
        </div>
        <div className="text-white flex justify-center items-center bg-slate-300 w-28 rounded">
          <PrinterIcon className="w-5  h-5" />
          <p className="ml-1">Print</p>
        </div>
        <div className="w-40 h-14 flex justify-center items-center border-2 rounded-lg bg-green-600 text-white cursor-pointer hover:bg-violet-600  text-center">
          <button className=""> Convert Order</button>
        </div>
      </div>
    </div>
  )
}

export default Customerdetails