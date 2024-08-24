import React from 'react'

const Database = () => {
  return (
    <div className='border-2'>
       <div>
        <h1>Database Operation</h1>
        <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Backup Database</label>
        </div>
        <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Restore Database</label>
        </div>
        <div className='w-15 h-15 border-2'>
            <p>Execute</p>

        </div>
       </div>
    </div>
  )
}

export default Database