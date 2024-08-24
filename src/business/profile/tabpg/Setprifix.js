import React from "react";

const Setprifix = () => {
  return (
    <div className="border-2">
      <div>
        <div className="text-center">
          <label htmlFor="">Customer Name</label>
          <select name="" id=""></select>
        </div>
        <div className="flex">
          <div>
            <div>
              <label htmlFor="">Quation Prefix</label>
              <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Order Prefix</label>
              <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Customer Prefix</label>
              <input type="text" className='border-2' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Purchase Order Prefix</label>
              <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Vendor Prefix</label>
              <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
              <label htmlFor="">Labour Invoice Prefix</label>
              <input type="text"  className='border-2' name="" id="" />
            </div>
            <div className="w-10 h-20 text-right bg-red-500">
        </div>
          </div>
          <div>
            <div>
                <label htmlFor="">Non Returnable Prefix</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Returnable DC Prefix</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Invoice  Prefix</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Pro-forma Prefix</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Supplier Prefix</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
          </div>
        </div>
        
      </div>
      <div className="border-2">
        <h1>Note prefix</h1>
        <div className="flex">
            <div>
                1
            </div>
            <div>2</div>
            <div>3</div>

        </div>

      </div>
    </div>
  );
};

export default Setprifix;
