// import React from 'react'
import { motion } from "framer-motion"
import Button from "./Button"


function Product({items, mover, index}) {
  return (
    <div className="w-full py-20 text-white h-[23rem] mt-10">
        <div onMouseEnter={()=>{mover(index)}} className="max-w-[80%] mx-auto flex items-center justify-between">
            <h1 className="text-6xl capitalize font-medium">{items.title}</h1>
            <div className="details w-1/3">
                <p className="mb-10">{items.description}
                </p>
                <div className="flex gap-5">
                  {items.live && <Button title={"Get Started"} />}
                  {items.case && <Button title={"Case Study"}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product