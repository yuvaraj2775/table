import React from "react";


const Buss = () => {
  return (
    <>
      <div className="">
     

        <div className="w-full">
          <div className="border-2 border-black m-5 rounded-xl shadow	flex	 h-full">
            <div className="w-full">
              <div className=" h-full w-full mt-10 pl-5  mx-auto">
                <div className="border-2 pt-3 pl-5 mr-1 mt-2 pr-4 ">
                  <div className="flex">
                    <h1 className="font-bold text-violet-600 -mt-7">Company details</h1>
                   
                  </div>
                  <div className=" flex justify-between mt-2">
                    <div className="flex">
                      <label htmlFor="">Type</label>
                      <select
                        name=""
                        id=""
                        className="border-2 font-normal ml-10 border-slate-300 w-96"
                      >
                        <option value="">select</option>
                      </select>
                    </div>
                    <div className="flex ml-5">
                      <label htmlFor="">Patner ID</label>
                      <input
                        type="text"
                        name=""
                        className="w-52 font-normal border-2 ml-3 border-slate-300"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <label htmlFor="">Company name</label>
                    <input
                      type="text"
                      className="w-11/12 h-7 font-normal -ml-8 border-2 border-slate-300"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex justify-end">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Address</label>
                  </div>
                  <div className="border-2  -ml-3 pl-3 -mr-2">
                    <div className="flex">
                      <div>
                        <h1>Billing</h1>
                      </div>
                      <div className="ml-3">
                        <h1>Delivery</h1>
                      </div>
                    </div>
                    <div className="flex mt-2 ">
                      <label htmlFor="">Street 1</label>
                      <input
                        type="text"
                        className="w-11/12 font-normal border-2 ml-3  border-slate-300"
                      />
                    </div>
                    <div className="flex mt-2 ">
                      <label htmlFor=""> Street 2</label>
                      <input
                        type="text"
                        className="w-11/12 font-normal border-2 ml-3 border-slate-300"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <div>City</div>
                        <div>
                          <select
                            name=""
                            className="w-40 ml-11 border-2 font-normal border-slate-300"
                            id=""
                          >
                            <option value="" className="">
                              Select
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex ">
                        <div>State</div>
                        <div>
                          <select
                            name=""
                            className="w-40 border-2 ml-5 font-normal border-slate-300"
                            id=""
                          >
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex ">
                        <div>Country</div>
                        <div>
                          <select
                            name=""
                            className="w-40 ml-5 border-2 font-normal border-slate-300"
                            id=""
                          >
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <label htmlFor="">Email</label>
                        <input
                          type="text"
                          className="w-96 ml-8 border-2 font-normal border-slate-300"
                        />
                      </div>
                      <div className="flex ">
                        <label htmlFor="">Pin</label>
                        <input
                          type="text"
                          className="border-2 ml-10 w-40 font-normal border-slate-300"
                        />
                      </div>
                    </div>
                    <div className="flex mt-2 mb-2">
                      <label htmlFor="">GSTNO</label>
                      <input
                        type="text"
                        name=""
                        className="border-2 ml-5 font-normal border-slate-300"
                        id=""
                      />
                    </div>
                  </div>

                  <div className="border-2 pt-3 mt-5  -ml-3 pl-3">
                    <h1 className=" text-violet-600 font-bold -mt-7">Contact details</h1>

                    <div className=" grid grid-cols-3 ">
                      <div className="ml-5 mb-3">
                        <label htmlFor="" className=" ml-10">
                          Designation
                        </label>
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className=" ml-10">
                          Name
                        </label>
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                      </div>
                      <div className="mr-5 mb-3">
                        <label htmlFor="" className=" ml-10">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3"
                        />
                        <input
                          type="text"
                          className="block border-2 font-normal border-slate-300 mt-3 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Buss;
