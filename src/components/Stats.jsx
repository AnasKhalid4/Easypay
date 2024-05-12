import React from 'react'
import {stats} from "../constants"
const Stats = () => {
  return (
   
     <section className='flex flex-row justify-around '>
        {stats.map((stats, index) => (
          <div
            key={stats.id}
            className='text-white flex  flex-col'
          >
          <span className='font-poppins font-bold text-[16px] text-center  sm:text-[25px]'>{stats.value}</span>
        <span className='font-poppins text-[10px] text-gradient sm:text-[15px]   '>{stats.title}   {"    "} |</span>
          
          </div>
        ))}  
     </section>
    
  )
}

export default Stats
