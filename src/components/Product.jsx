// import React from 'react'
import { motion } from "framer-motion"
import Button from "./Button"


function Product({items, mover, index}) {
  return (
    <div className="w-full md:py-20 py-10 text-white md:h-[23rem] h-[20rem] mt-10">
        <div onMouseEnter={()=>{mover(index)}} className="md:max-w-[80%] max-w-[90%] mx-auto flex items-center justify-between">
            <h1 className="text-2xl md:text-6xl capitalize font-medium">{items.title}</h1>
            <div className="details w-2/4 md:w-1/3">
                <p className="mb-10 text-xs md:text-sm">{items.description}
                </p>
                <div className="flex flex-col md:flex-row gap-5">
                  {items.live && <Button title={"Get Started"} />}
                  {items.case && <Button title={"Case Study"}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product