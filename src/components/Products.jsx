import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/videos/video1.webm";

function Products() {
  var products = [
    {
      title: "Dummy Product 1",
      description:
        "blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis",
      live: "https://optical.toys/",
      case: "https://www.github.com/Sandip-Chavda",
    },
    {
      title: "Product Dummy 2",
      description:
        "blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis",
      live: "https://optical.toys/",
      case: "https://www.github.com/Sandip-Chavda",
    },
    {
      title: "Dummy 3",
      description:
        "blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis",
      live: "https://optical.toys/",
      case: "https://www.github.com/Sandip-Chavda",
    },
    {
      title: "Original Dummy",
      description:
        "blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis",
      live: "https://optical.toys/",
      case: "https://www.github.com/Sandip-Chavda",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <>
      <h1
        id="projects"
        className="text-7xl mt-36 mb-14 underline font-bold text-center italic"
      >
        Projects
      </h1>
      <div className=" relative mt-6">
        {products.map((val, index) => (
          <Product key={index} mover={mover} count={index} val={val} />
        ))}
        <div className="absolute top-0 pointer-events-none w-full h-full ">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            className="window w-[32rem] absolute left-[44%] overflow-hidden h-[23rem]"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video src={video1} autoPlay loop muted />
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video src={video1} autoPlay loop muted />
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video src={video1} autoPlay loop muted />
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video src={video1} autoPlay loop muted />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
