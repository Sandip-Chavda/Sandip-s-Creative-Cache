// import React from "react";
// import logo from "../assets/images/logo.png";
// import Button from "./Button";

// const Navbar = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-[#f9f9f94b]">
//       <div className="nleft flex items-center">
//         <img className="h-8" alt="Sandip" src={logo} />
//         <div className="links flex gap-14 ml-20">
//           {[
//             "Home",
//             "Projects",
//             "TechStack & Tools",
//             "Github",
//             "",
//             "Portfolio",
//           ].map((elem, index) =>
//             elem.length === 0 ? (
//               <span
//                 key={index}
//                 className="w-[0.75px] h-7 bg-[#f9f9f94b] "
//               ></span>
//             ) : (
//               <a
//                 className="font-normal text-base flex items-center gap-1"
//                 key={index}
//               >
//                 {index === 1 && (
//                   <span
//                     style={{ boxShadow: "0 0 0 0.2em #000" }}
//                     className="inline-block w-2 h-2 bg-[#000000] rounded-full "
//                   ></span>
//                 )}
//                 {elem}
//               </a>
//             )
//           )}
//         </div>
//       </div>
//       <Button />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
  // Define an array of links and their corresponding hrefs
  const links = [
    { text: "Home", href: "/", target: "_parent" },
    { text: "Projects", href: "#projects", target: "_parent" },
    { text: "TechStack & Tools", href: "#techstack", target: "_parent" },
    {
      text: "Github",
      href: "https://github.com/Sandip-Chavda",
      target: "_blank",
    },
    { text: " | " },
    {
      text: "Portfolio",
      href: "https://sandip-chavda-portfolio.vercel.app/",
      target: "_blank",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-[#f9f9f94b]">
      <div className="nleft flex items-center">
        <img className="h-8" alt="Sandip" src={logo} />
        <div className="links flex gap-14 ml-20">
          {links.map((link, index) => (
            <a
              key={index}
              target={link.target}
              href={link.href} // Assign the href from the array
              className="font-normal text-base flex items-center gap-1"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0 0.2em #000" }}
                  className="inline-block w-2 h-2 bg-[#000000] rounded-full "
                ></span>
              )}
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <Button
        title="Linked In"
        link="https://www.linkedin.com/in/sandip-chavda-86704a2aa/"
      />
    </div>
  );
};

export default Navbar;
