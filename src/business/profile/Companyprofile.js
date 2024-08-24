import React from 'react'

const Companyprofile = () => {
  return (
    <div className='border-2'>
        <div className='flex justify-between'>
            <div className='border-2 '>
                <div>
                    <label htmlFor="">Company Name</label>
                    <select name=""  className='border-2' id=""></select>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
                <div>
                <label htmlFor="">Description</label>
                <input type="text"  className='border-2' name="" id="" />
                <div>
                    <input type='checkbox' name="" id="" />
                    <label htmlFor="">Delivery Address</label>
                </div>
                </div>
            </div>
            <div className='border-2 flex'>
                <div >
                    <p>Company Logo</p>
                    <img src="" alt="" />
                    <div className='border-2 h-16 w-24'>

                    </div>
                </div>
                <div >
                    <p>Company Logo</p>
                    <img src="" alt="" />
                    <div className='border-2 h-16 w-24'>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
       <div className='flex justify-between'>
       <div className='border-2'>
        <h1>Company Details</h1>
            <div>
               <label htmlFor="">Steet 1</label>
               <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
               <label htmlFor="">Steet 2</label>
               <input type="text"  className='border-2' name="" id="" />
            </div>
            <div className='flex'>
                <div>
                    <label htmlFor="">City</label>
                    <select name=""  className='border-2'  id=""></select>
                </div>
                <div>
                    <label htmlFor="">Pin</label>
                  <input type="text"  className='border-2' name="" id="" />
                </div>

            </div>
            <div className='flex'>
                <div>
                    <label htmlFor="">State</label>
                    <select name=""  className='border-2' id=""></select>
                </div>
                <div>
                    <label htmlFor="">Country</label>
                 <select name=""  className='border-2' id=""></select>
                </div>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Website</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div className='flex'>
            <div>
                <label htmlFor="">Phone No</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Fax No</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            </div>
            <div className='flex'>
            <div>
                <label htmlFor="">GST In</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">ARN NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            </div>
        </div>
        <div className='border-2'>
            <div>
                <label htmlFor="">TIN NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">CST NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">ECC NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">ST REG NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">SSI REG NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">PAN NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Service Tax Register NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>
            <div>
                <label htmlFor="">Work Contract NO</label>
                <input type="text"  className='border-2' name="" id="" />
            </div>

        </div>

       </div>

       <div className='flex justify-between'>
        <div className='border-2'> 
            <h1>Contact Personal Details</h1>
            <div>

            </div>
            <div className='flex'>
                <div className='h-10 w-20 bg-red-500'>

                </div>
                <div>
                    note
                </div>
            </div>
        </div>
        <div className='border-2'>
            <h1>Billing Address</h1>
            <div>
                <div>
                    <label htmlFor="">Billing Name</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Branch Name</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Account Number</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
                <div>
                    <label htmlFor="">IFSC Number</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
                <div>
                    <label htmlFor="">IFSC</label>
                    <input type="text"  className='border-2' name="" id="" />
                </div>
            </div>

        </div>

       </div>

       <div className='flex justify-center'>
        <div className='h-10 w-20 bg-red-500'>

        </div>
        <div className='h-10 w-20 bg-blue-500'>

        </div>
       </div>

    </div>
  )
}

export default Companyprofile