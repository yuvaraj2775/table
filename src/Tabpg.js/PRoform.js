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
          <div   class=" text-white bg-gradient-to-r ml-5 pt-2 from-green-400 cursor-pointer via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 w-28 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-1 text-center me-2 mb-2">
            <PlusCircleIcon className="w-5 h-5 mx-auto" />
            <p className="ml-2">Add Profoma</p>
          </div>
          <div  class="text-white bg-gradient-to-r  w-24 ml-56 from-green-400 cursor-pointer via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <MagnifyingGlassIcon className="w-5 h-5 mx-auto" />
            <p className="text-center">View</p>
          </div>
          
          <div  class="text-white bg-gradient-to-r   ml-7 cursor-pointer from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <MagnifyingGlassIcon className="w-5 h-5 mx-auto" />
            <p className="text-center">View</p>
          </div>
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

export default PRoform