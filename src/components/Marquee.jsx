import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full py-12 gap-20 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-6"
      >
        {imagesurls.map((url, index) => (
          <img
            className="w-[5vw] h-[5vw]"
            key={index}
            src={url}
            alt="tech & tools"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-6"
      >
        {imagesurls.map((url, index) => (
          <img
            className="w-[5vw] h-[5vw] "
            key={index}
            src={url}
            alt="tech & tools"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;

// ----------------------------------------------------------------------

// import { motion } from "framer-motion";
// import React from "react";

// function Marquee({ imagesurls }) {
//   // Duplicate the images array to create a seamless transition between the end and beginning
//   const duplicatedImages = [...imagesurls, ...imagesurls];

//   return (
//     <div className="flex w-full py-12 gap-20 whitespace-nowrap overflow-hidden">
//       {/* Create a motion.div for the marquee animation */}
//       <motion.div
//         initial={{ x: "0" }}
//         animate={{ x: "-100%" }}
//         transition={{ ease: "linear", duration: 12, repeat: Infinity }}
//         className="flex flex-shrink-0 gap-20 py-6"
//       >
//         {/* Map through the duplicated images array */}
//         {duplicatedImages.map((url, index) => (
//           <img
//             className="w-[5vw] h-[5vw]"
//             key={index}
//             src={url}
//             alt="tech & tools"
//           />
//         ))}
//       </motion.div>
//       <motion.div
//         initial={{ x: "0" }}
//         animate={{ x: "-100%" }}
//         transition={{ ease: "linear", duration: 12, repeat: Infinity }}
//         className="flex flex-shrink-0 gap-20 py-6"
//       >
//         {/* Map through the duplicated images array */}
//         {duplicatedImages.map((url, index) => (
//           <img
//             className="w-[5vw] h-[5vw]"
//             key={index}
//             src={url}
//             alt="tech & tools"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Marquee;
