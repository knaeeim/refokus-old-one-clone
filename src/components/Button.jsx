// import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title}) {
  return (
    <div className='w-32 md:w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center gap-3 justify-between'>
        <span className="text-xs md:text-sm font-semibold">{title}</span> <IoIosReturnRight/>
    </div>
  )
}

export default Button