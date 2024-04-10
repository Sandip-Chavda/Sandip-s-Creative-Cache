// import React from "react";
// import { BsArrowReturnRight } from "react-icons/bs";

// const Button = ({ title = "Linked In" }) => {
//   return (
//     <div className="min-w-40 px-4 py-2 bg-[#ffffff] flex items-center justify-evenly text-[#000] rounded-full">
//       <span className=" text-sm font-semibold ">{title}</span>
//       <BsArrowReturnRight className="text-lg font-semibold" />
//     </div>
//   );
// };

// export default Button;

import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({ title = "Linked In", link = "" }) => {
  const openLinkedInProfile = () => {
    window.open(link, "_blank"); // Open LinkedIn profile in new tab
  };

  return (
    <div
      className="min-w-40 px-4 py-2 bg-[#ffffff] flex items-center justify-evenly text-[#000] rounded-full cursor-pointer"
      onClick={openLinkedInProfile} // Call function to open LinkedIn profile on click
    >
      <span className="text-sm font-semibold">{title}</span>
      <BsArrowReturnRight className="text-lg font-semibold" />
    </div>
  );
};

export default Button;
