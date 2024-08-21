import React from 'react'

const Contact = () => {
  return (
    <div className='border-2 border-black m-5 rounded-xl shadow	flex	 h-screen '>
      <div className='mx-auto w-3/4  h-screen my-auto'>
      <div>
      <img src={"./img/cal.jpg"} className='w-1/4 h-1/4 ml-52 mt-10'  alt="" />
      <div className='ml-36'>
      <h1 className='text-4xl mt-2'>Talk With An Adviser</h1>
      <h1 className=' text-sm font-serif mt-3'>Enter Your Email We Will Connect <div>To The Right Person</div></h1>
      <div className='mt-5'>
        <label htmlFor="" className='mb-2'>Enter Your Mail</label>
        <input type="text" name="" className='block w-3/4 h-8 border-2 mt-1 rounded' id="" />
      </div>
      <button className='ml-32 mt-3 h-10 w-20 border-2 bg-slate-600 text-white rounded-lg'>Submit</button>
      </div>
      </div>
      </div>
    
    </div>
  )
}

export default Contact