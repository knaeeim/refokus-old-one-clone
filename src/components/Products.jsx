import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import arqitel from "/public/videos/arqitel.webm";
import ttr from "/public/videos/ttr.webm";
import yir from "/public/videos/yir.webm";
import yahoo from "/public/videos/yahoo.webm"


function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod adipisci reprehenderit voluptas voluptate ipsum!",
      live: true,
      case: true,
    },

    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod adipisci reprehenderit voluptas voluptate ipsum!",
      live: true,
      case: true,
    },

    {
      title: "YRT 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod adipisci reprehenderit voluptas voluptate ipsum!",
      live: true,
      case: true,
    },

    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod adipisci reprehenderit voluptas voluptate ipsum!",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);

  const mover = (value) => {
    setPosition(value*23);
  }

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => (
        <Product key={index} items={item} mover={mover} index={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: .6}}
          className="absolute w-[32rem] h-[23rem] bg-sky-300 left-[42%] overflow-hidden"
        >
          <motion.div animate={{y: -position + `rem`}} transition={{ ease: [0.45, 0, 0.55, 1], duration: .5}} className="w-full h-full bg-sky-100"> <video autoPlay muted loop src={arqitel}></video> </motion.div>
          <motion.div animate={{y: -position + `rem`}} transition={{ ease: [0.45, 0, 0.55, 1], duration: .5}} className="w-full h-full bg-sky-200"> <video autoPlay muted loop src={ttr}></video> </motion.div>
          <motion.div animate={{y: -position + `rem`}} transition={{ ease: [0.45, 0, 0.55, 1], duration: .5}} className="w-full h-full bg-sky-300"> <video autoPlay muted loop src={yir}></video> </motion.div>
          <motion.div animate={{y: -position + `rem`}} transition={{ ease: [0.45, 0, 0.55, 1], duration: .5}} className="w-full h-full bg-sky-400"> <video autoPlay muted loop src={yahoo}></video> </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
