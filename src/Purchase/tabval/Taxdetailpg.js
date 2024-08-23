import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const Taxdetailpg = () => {
  return (
    <div className='mt-5'>
        <div className='border-2 rounded'>
            <div className='flex mt-5 ml-5'>
               <p> Other Charges[RS]:</p>
               <div className='w-24 h-10 bg-violet-500 cursor-pointer rounded-lg ml-6 text-white'>
                <div className='f'>
                <PlusIcon className='w-4 h-4 mx-auto mt-3 '/>
                </div>
               </div>

            </div>
            <div className='flex mt-5 ml-5'>
               <p> Add HSN Code:</p>
               <div className='w-24 h-10 bg-violet-500 cursor-pointer rounded-lg ml-12 text-white'>
                <div className='f'>
                <PlusIcon className='w-4 h-4 mx-auto mt-3 '/>
                </div>
               </div>

            </div>
            <div className='grid grid-cols-2 mr-5'>
                <div></div>
                <div className=' mt-5 ml-5'>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Insurance</label>
                    <input type="text" name="" className='border-2 rounded h-10' id="" />
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Packing</label>
                    <input type="text" name="" className='border-2 rounded h-10' id="" />
                </div>
                <div className='grid grid-cols-2'>
                    <label htmlFor="">Freight</label>
                    <input type="text" name="" className='border-2 rounded h-10' id="" />
                </div>
            </div>

            </div>
            <div className='m-5'>
                <input type="checkbox" name="" id="" />
                <label htmlFor=""> Include Previous Tax</label>

            </div>
        </div>

    </div>
  )
}

export default Taxdetailpg