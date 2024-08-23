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
      <div className="flex mt-5 ">
      <div className="flex mt-5">
  <div className='ml-10 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg'>
    <h1 className="font-bold text-xl mb-4">Delivery Address</h1>
    <div className="flex border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-3 ">
              <label className="block text-sm font-medium text-gray-700">Street 1</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm  font-medium text-gray-700">Street 2</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 3</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 ">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 4</label>
              <input
                type="text"
                className="h-10 w-52 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 5</label>
              <input
                type="text"
                className="h-10 w-52 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 6</label>
              <input
                type="text"
                className="h-10 w-52 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="flex mt-5">
  <div className='ml-10 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg'>
    <h1 className="font-bold text-xl mb-4">Billing Amount</h1>
    <div className="flex border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 1</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 2</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 3</label>
              <input
                type="text"
                className="h-10 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 4</label>
              <input
                type="text"
                className="h-10  w-52 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block w-52 text-sm font-medium text-gray-700">Street 5</label>
              <input
                type="text"
                className="h-10  border-2 w-52 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Street 6</label>
              <input
                type="text"
                className="h-10 w-52 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
        </div>
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

export default Customerdetails