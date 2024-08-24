import React, { useState } from "react";


import { PlusIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/20/solid";

const Orderpg = () => {

  const [values,setvalue]=useState("other")
  let handlechange=(val)=>{
    setvalue(val)
  }
  const tablev = [
    {
      name: "1",
      mail: "lindsaywalton@example.com",
      qty: "2",
      time: "12 Pm",
      unit: "1",
      Discounttype: "card",
      discount: "50%",
      unitprice: "40 Rs",
      taxvaluu: "10%",
      taxtype1: "Null",
      amttype: "Cash",
      taxtype2: "Null",
      amttype2: "Null",
    },
    {
      name: "2",
      mail: "lindsaywalton@example.com",
      qty: "5",
      time: " 11 Am",
      unit: "1",
      Discounttype: "card only",
      discount: "20%",
      unitprice: "100 Rs",
      taxvaluu: "10%",
      taxtype1: "Null",
      amttype: "Cash",
      taxtype2: "Null",
      amttype2: "Null",
    },
  ];
  return (
    <div>
    
      

      <div className="border-2 border-slate-200 overflow-x-auto rounded-xl mt-5  ">
        <table className="  overflow-x-scroll w-[1300] ">
          <tr className="">
            <th className="h-10 bg-slate-100 font-semibold text-sm pl-4 pr-3 opacity-90 p-2"> Serial No</th>
            <th className="h-10 bg-slate-100 font-semibold text-sm pl-4 pr-3 w-full  opacity-90 border-l-2  border-white">
              Item Name/Description
            </th>
            <th className="h-10 bg-slate-100 font-semibold text-sm w-full pl-4 pr-3 opacity-90 border-l-2   border-white">
              Qty
            </th>
            <th className="h-10 bg-slate-100 font-semibold text-sm pl-4 pr-3  opacity-90 border-l-2   border-white">
              Time[Hrs]
            </th>
            <th className="h-10 bg-slate-100 font-semibold text-sm pl-4 pr-3 opacity-90 border-l-2   border-white">
              Unit
            </th>
            <th className="h-10 bg-slate-100 font-semibold   text-sm pl-4 pr-3 opacity-90  border-l-2  border-white">
              Discount Type
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
              Discount
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full  text-sm pl-4 pr-3  opacity-90  border-l-2   border-white">
              Unit Price
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
              Tax Value
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
              Tax Type1
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3 opacity-90  border-l-2   border-white">
              {" "}
              Amt Type{" "}
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3  opacity-90  border-l-2    border-white">
              {" "}
              Tax Type 2{" "}
            </th>
            <th className="h-10 bg-slate-100 font-semibold w-full text-sm pl-4 pr-3  opacity-90 border-l-2   border-white">
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
              <td className="text-slate-400  w-40 ">{e.Discounttype}</td>
              <td className="text-slate-400 pl-4 pr-3  ">{e.discount}</td>
              <td className="text-slate-400  ">{e.unitprice}</td>
              <td className="text-slate-400 pl-4 pr-3 ">{e.taxvaluu}</td>
              <td className="text-slate-400 pl-4 pr-3 ">{e.taxtype1}</td>
              <td className="text-slate-400 pl-4 pr-3 ">{e.amttype}</td>
              <td className="text-slate-400 pl-4 pr-3 ">{e.taxtype2}</td>
              <td className="text-slate-400 pl-4 pr-3  ">{e.amttype2}</td>
            </tr>
          ))}
        </table>
        
       
        <div className="flex justify-around mt-5">
          <div className=" flex">
            <div className="flex w-24 border-2 h-16 mt-3  pt-4 text-slate-600 border-green-300 hover:bg-green-300 cursor-pointer  bg-slate-100 rounded-xl">
              <PlusIcon className="w-5 mt-0.5  h-5 " />
              <p>Add unit</p>
            </div>
            <div className="flex  border-2 ml-5 pt-4 h-16 w-24 text-slate-600 hover:bg-gray-300 cursor-pointer border-green-300 bg-slate-100 rounded-xl mt-3">
              <PlusIcon className="w-5 h-5 " />
              <p>Add Cost</p>
            </div>
          </div>
          <div className="flex items-center  ">
            <div class="text-white flex bg-green-600 justify-center items-center  w-28 h-14  cursor-pointer hover:border-green-800  rounded">
            
              <PlusCircleIcon className="w-5  h-5" />
              <p className="">Add Items</p>
            </div>
            <div  class="text-white flex justify-center items-center bg-red-800 w-28 h-14  cursor-pointer hover:border-red-800  rounded ml-3 ">
              <XMarkIcon className="w-5  h-5" />
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
          <p>Save</p>
        </div>
        <div className="text-white bg-gradient-to-r flex justify-center items-center w-28 bg-blue-600 rounded ">
          <PencilSquareIcon className="w-5  h-5" />
          <p>Edit</p>
        </div>
        <div className="text-white bg-gradient-to-r flex justify-center items-center w-28 bg-red-800 rounded ">
          <TrashIcon className="h-5  w-5" />
          <p>Delete</p>
        </div>
        <div className="text-white flex justify-center items-center bg-slate-300 w-28 rounded">
          <PrinterIcon className="w-5  h-5" />
          <p>Print</p>
        </div>
        <div className="w-40 h-14 flex justify-center items-center border-2 rounded-lg bg-green-600 text-white cursor-pointer hover:bg-violet-600  text-center">
          <button className=""> Convert Order</button>
        </div>
      </div>
    </div>
  );
};

export default Orderpg;
