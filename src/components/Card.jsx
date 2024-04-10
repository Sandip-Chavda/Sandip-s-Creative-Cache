// import { motion } from "framer-motion";
// import React from "react";
// import { BsArrowReturnRight } from "react-icons/bs";

// function Card({ width, start, para, hover = "false" }) {
//   return (
//     <motion.div
//       whileHover={{
//         backgroundColor: hover === "true" && "#1c1c1c",
//         border: hover === "true" && "0.5px solid white",
//       }}
//       className={`bg-[#323232] p-5 rounded-xl ${width} min-h-[28rem] flex flex-col justify-between`}
//     >
//       <div className="w-full">
//         <div className="w-full flex justify-between items-center">
//           <h3 className="">Sandip Chavda</h3>
//           <BsArrowReturnRight />
//         </div>
//         <h1 className="text-3xl font-semibold mt-6">Who am i</h1>
//       </div>
//       <div className="down w-full">
//         {start === true && (
//           <>
//             <h1 className="text-6xl font-bold tracking-tighter leading-none">
//               Start something
//             </h1>
//             <button className="rounded-full mt-5 py-3 px-9 border-[2px] border-[#ffffff] text-xl font-semibold">
//               Join now
//             </button>
//           </>
//         )}
//         {para === true && (
//           <p className="text-lg text-gray-200">
//             Always ready to work with new projects.
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Card;

import { motion } from "framer-motion";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Card({ width, start, para, hover = "false" }) {
  const handleJoinNowClick = () => {
    // Define recipient email address and subject
    const recipient = "chavdas766@gmail.com";
    const subject = "Interested To Hire Me and Work With Me ";

    // Create mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    // Open mail client with pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#1c1c1c",
        border: hover === "true" && "0.5px solid white",
        margin: "10px",
      }}
      className={`bg-[#323232] p-5 rounded-xl ${width} min-h-[28rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="">Sandip Chavda</h3>
          <BsArrowReturnRight />
        </div>
        <h1 className="text-3xl font-semibold mt-6">Who am i</h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-bold tracking-tighter leading-none">
              Start something
            </h1>
            <button
              className="rounded-full mt-5 py-3 px-9 border-[2px] border-[#ffffff] text-xl font-semibold"
              onClick={handleJoinNowClick} // Call function to handle "Join now" button click
            >
              Join now
            </button>
          </>
        )}
        {para === true && (
          <p className="text-lg text-gray-200">
            Always ready to work with new projects.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
