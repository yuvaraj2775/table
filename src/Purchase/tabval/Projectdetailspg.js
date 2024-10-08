import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";

const Projectdetailspg = () => {
    const tablev = [
        {
          name: "Lindsay Waiton",
          mail: "lindsaywalton@example.com",
          qty: "Member",
          time: "Member",
          unit: "Member",
          Discounttype: "Member",
          discount: "Member",
          unitprice: "Member",
          taxvaluu: "Member",
          taxtype1: "Member",
          amttype: "Member",
          taxtype2: "Member",
          amttype2: "Member",
        },
        {
          name: "Lindsay Waiton",
          mail: "lindsaywalton@example.com",
          qty: "Member",
          time: "Member",
          unit: "Member",
          Discounttype: "Member",
          discount: "Member",
          unitprice: "Member",
          taxvaluu: "Member",
          taxtype1: "Member",
          amttype: "Member",
          taxtype2: "Member",
          amttype2: "Member",
        },
      ];
  return (
    <div>
         <div>
    
      

    <div className="border-2 border-slate-200 rounded-xl mt-5  overflow-x-scroll ">
      <div cla>
      <table className="   ">
        <tr className="">
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90 p-2"></th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 w-full  opacity-90 border-l-2  border-white">
            Item Name/Description
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90 border-l-2   border-white">
            Qty
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3  opacity-90 border-l-2   border-white">
            Time[Hrs]
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90 border-l-2   border-white">
            Unit
          </th>
          <th className="h-10 bg-slate-500 font-semibold  text-sm pl-4 pr-3 opacity-90  border-l-2  border-white">
            Discount Type
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
            Discount
          </th>
          <th className="h-10 bg-slate-500 font-semibold  text-sm pl-4 pr-3  opacity-90  border-l-2   border-white">
            Unit Price
          </th>
          <th className="h-10 bg-slate-500 font-semibold  text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
            Tax Value
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
            Tax Type1
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
            {" "}
            Amt Type{" "}
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3  opacity-90  border-l-2    border-white">
            {" "}
            Tax Type 2{" "}
          </th>
          <th className="h-10 bg-slate-500 font-semibold text-sm pl-4 pr-3 w-32  opacity-90 border-l-2   border-white">
            {" "}
            Amt Type 2{" "}
          </th>
        </tr>

        {tablev.map((e) => (
          <tr>
            <td className="pl-4 pr-3  pt-2">{e.name}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.mail}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.qty}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.time}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.unit}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.Discounttype}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.discount}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.unitprice}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.taxvaluu}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.taxtype1}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.amttype}</td>
            <td className="text-slate-400 pl-4 pr-3 ">{e.taxtype2}</td>
            <td className="text-slate-400 pl-4 pr-3  ">{e.amttype2}</td>
          </tr>
        ))}
      </table>
      </div>
     
      <div className="flex justify-around mt-5">
        <div className="mb-2">
          <div className="flex p-3 border-2 text-slate-600 hover:bg-green-300 cursor-pointer border-slate-200 bg-slate-100 rounded-xl">
            <PlusIcon className="w-5 mt-0.5 h-5 " />
            <p>Add unit</p>
          </div>
          <div className="flex p-3 border-2 text-slate-600 hover:bg-gray-300 cursor-pointer border-slate-200 bg-slate-100 rounded-xl mt-2">
            <PlusIcon className="w-5 h-5 " />
            <p>Add Cost</p>
          </div>
        </div>
        <div className="flex items-center  ">
          <div className="rounded-md   border  h-16 w-32 py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <PlusCircleIcon className="w-5  h-5" />
            <p>Add Items</p>
          </div>
          <div className="rounded-md  ml-3  border h-16 w-32  py-2 px-4 flex  items-center justify-center bg-violet-500 text-white font-medium shadow-sm hover:bg-green-300   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <XMarkIcon className="w-5 ml-4  h-5" />
            <p>Remove</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <label htmlFor="">Total</label>
            <input
              type="text"
              name=""
              id=""
              className="border-2 rounded h-10  w-32"
            />
          </div>
          <div className="mt-3 ">
            <label htmlFor="">Discount</label>
            <input
              type="text"
              name=""
              className="border-2 rounded h-10 ml-16 w-32"
              id=""
            />
          </div>
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
     
    </div>
  </div>
    </div>
  )
}

export default Projectdetailspg