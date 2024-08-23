import React from 'react'
import Tabfolder from './Tabfolder'

const Purchaseorder = () => {
  return (
    <div>
        <h1 className='font-bold text-center text-xl'> Purchase Order Form</h1>
        <div className='grid grid-cols-2 mt-10'>
            <div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">PO Name</label>
                    <input type="text " className='h-10 border-2 rounded' name="" id="" />
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Prchase Order Type</label>
                    <input type="text " className='h-10 border-2 rounded' name="" id="" />
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Supplier Id</label>
                    <input type="text " className='h-10 border-2 rounded' name="" id="" />
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Material</label>
                    <select name="" className='h-10 border-2 rounded' id=""></select>
                </div>
            </div>
            <div className='ml-10'>
            <div className='grid grid-cols-2 mb-3'>
                    <div className='grid grid-cols-2'>
                    <label htmlFor="">PO Name</label>
                    <input type="text " className='h-10 border-2 inline rounded' name="" id="" />
                    </div>
                    <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="" className='ml-10'>Revision</label>
                    <input type='text' className='h-10 border-2 rounded' name="" id="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">PO Date</label>
                    <input type='date' className='h-10 border-2' name="" id="" />
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">Issue Company</label>
                    <select name="" id="" className='border-2 h-10 rounded'></select>
                </div>
                <div className='grid grid-cols-2 mb-3'>
                    <label htmlFor="">HSN Code</label>
                    <select name=""  className='border-2 h-10 rounded' id=""></select>
                </div>
            </div>

        </div>
        <div>
            <Tabfolder/>
        </div>

    </div>
  )
}

export default Purchaseorder