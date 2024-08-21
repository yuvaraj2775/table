import React from "react";
import { PlusIcon } from '@heroicons/react/24/solid'
import { MinusIcon } from '@heroicons/react/24/solid'

const Other = () => {
  return (
    <div className="border-2 border-black pr-5 rounded-xl shadow w-full	flex	 h">
      <div className="border-2 w-full pr-5  m-4">
        <div className="grid grid-cols-2 ml-2 pr-5 mt-2 ">
          <div className="border-2 pl-4 pt-3 mr-2">
            <h1 className=" text-blue-500 font-bold -mt-6">Other Details</h1>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Status of company
              </label>
              <select
                name=""
                id=""
                className="w-44 border-2 border-slate-300 rounded-lg "
              >
                <option value=""></option>
              </select>
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Type of company
              </label>
              <select
                name=""
                id=""
                className="w-44 border-2 border-slate-300 rounded-lg "
              >
                <option value=""></option>
              </select>
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Block Mark
              </label>
              <select
                name=""
                id=""
                className="w-44 border-2 border-slate-300 rounded-lg "
              >
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Remarks
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-44 border-2 border-slate-300 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 mt-2 mb-2">
              <label htmlFor="" className="font-normal">
                Reference By
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-44 border-2 border-slate-300 rounded-lg "
              />
            </div>
          </div>
          <div className="border-2 pl-4 pt-3  mr-1">
            <h1 className="font-bold text-blue-500 -mt-6">Bank Details</h1>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Bank name
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Branch Name
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Account No
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                IFSC Code
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="border-2 grid grid-cols-2 ml-2  mt-4 pl-4 pt-3 mr-1">
          <div>
            <h1 className=" font-bold text-blue-500 -mt-6">Tax Details</h1>
            <div className="grid grid-cols-2 mt-2 ">
              <label htmlFor="" className="font-normal">
                TIN No
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                CST No
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                PAN
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                ST REG No
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2 mb-3">
              <label htmlFor="" className="font-normal">
                ARRNo
              </label>
              <input
                type="text"
                className="w-44 border-2 border-slate-300 rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 mt-8">
              <label htmlFor="" className="font-normal">
                SSI Reg no
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                ECC No
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Service Tax Register no
              </label>
              <input
                type="text"
                className="w-44 border-2 border-slate-300 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 mt-2">
              <label htmlFor="" className="font-normal">
                Work Contract Reg
              </label>
              <input
                type="text"
                name=""
                className="w-44 border-2 border-slate-300 rounded-lg"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="border-2 mt-5 ml-2 mr-1">
          <h1 className=" ml-4 pt-3 font-bold  -mt-6 text-blue-500">
            Cost Calculation
          </h1>
          <div className="flex overflow-x-auto  mt-3 ml-5">
            <div className="mr-3">
              <label htmlFor="" className="font-normal">
                Maching Cost
              </label>
              <input
                type="text"
                name=""
                className="border-2 block border-slate-300 mt-3 mx-3 rounded-lg  "
                id=""
              />
            </div>
            <div className="mr-3">
              <label htmlFor="" className="font-normal">
                Setting Time Cost
              </label>
              <input
                type="text"
                name=""
                className="border-2 block border-slate-300 mt-3 mb-3 rounded-lg"
                id=""
              />
            </div>
            <div className="mr-3">
              <label htmlFor="" className="font-normal">
                Costing Method
              </label>
              <input
                type="text"
                name=""
                className="border-2 block border-slate-300  mt-3 mb-3 rounded-lg"
                id=""
              />
            </div>
            <div className="mr-3">
              <label htmlFor="" className="font-normal">
                {" "}
                Method
              </label>
              <input
                type="text"
                name=""
                className="border-2 block border-slate-300  mt-3 mb-3 rounded-lg"
                id=""
              />
            </div>
            <div className="mr-3">
              <label htmlFor="" className="font-normal">
                Supply
              </label>
              <input
                type="text"
                name=""
                className="border-2 block border-slate-300  mt-3 mb-3 rounded-lg"
                id=""
              />
            </div>
            <div className="mr-5">
             <div className="flex  w-20 h-10 rounded mt-5">
              <button className="border-2 rounded-full bg-blue-400" ><PlusIcon className="w-6 h-6"/></button>
              <button className="ml-3 border-2 rounded-full bg-red-500" ><MinusIcon className="w-6 h-6" /></button>
             </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
