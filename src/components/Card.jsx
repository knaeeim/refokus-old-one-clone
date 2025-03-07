// import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ width, start, para, hover="false" }) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && '#7443ff', padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30vh] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h1>Up Next: News</h1>
          <IoIosArrowRoundForward />
        </div>
        { para ? <h1 className="text-3xl font-medium mt-5">Insights and behind the scenes</h1> : <h1 className="text-3xl font-medium mt-5"> Let's Get to it, together. </h1>}
      </div>
      <div className="down w-full mt-60">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight mt-10"> Start a Project </h1>
            <button className="rounded-full border-2 border-zinc-100 px-5 py-2 mt-5"> Contact Us </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
