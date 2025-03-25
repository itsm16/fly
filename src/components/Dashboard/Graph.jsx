import React from 'react'
import img from "../../assets/dashboard/graph.png";

function Graph() {
  return (
    <div className='h-full w-full flex flex-col'>
        <div className=' h-[85%]'>
          <img className='w-full h-full graph' alt="" />
        </div>
        <div className='flex justify-center px-5 gap-2 py-1'>
            <button className='btn bg-[#199FB1] border-none rounded-lg'>Month</button>
            <button className='btn bg-[#199FB1] border-none rounded-lg'>Year</button>
        </div>
    </div>
  )
}

export default Graph