import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";

const Notes = () => {
  return (
    <div className='mt-5'>
        <div className='border-2 rounded h-3/4x'>

<div className='border-2 w-3/4 mx-auto h-[350px] rounded my-3'>
<p  className=' m-5 opacity-30'>Enter notes here ............</p>

</div>
<p className='text-right m-3'>250 charecter only</p>


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
          <p className="ml-1"> Edit</p>
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

export default Notes