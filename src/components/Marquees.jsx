import React from "react";
import Marquee from "./Marquee";
// import StackIcon from "tech-stack-icons";

function Marquees() {
  var images = [
    [
      "https://www.tech-stack-icons.com/icons/reactjs.svg",
      "https://www.tech-stack-icons.com/icons/mongodb.svg",
      "https://www.tech-stack-icons.com/icons/nodejs.svg",
      //   "https://www.tech-stack-icons.com/icons/git.svg",
      "https://www.tech-stack-icons.com/icons/js.svg",
      "https://www.tech-stack-icons.com/icons/tailwindcss.svg",
      "https://www.tech-stack-icons.com/icons/redux.svg",
      "https://www.tech-stack-icons.com/icons/nextjs.svg",
    ],
    [
      "https://www.tech-stack-icons.com/icons/vscode.svg",
      "https://www.tech-stack-icons.com/icons/sublime.svg",
      "https://www.tech-stack-icons.com/icons/postman.svg",
      "https://www.tech-stack-icons.com/icons/github.svg",
      "https://www.tech-stack-icons.com/icons/git.svg",
      "https://www.tech-stack-icons.com/icons/firebase.svg",
      "https://www.tech-stack-icons.com/icons/figma.svg",
    ],
  ];

  return (
    <div className="overflow-hidden relative w-full">
      <h1
        id="techstack"
        className="text-7xl mt-36 mb-16 underline font-bold text-center italic"
      >
        TechStack & Tools
      </h1>
      {images.map((item, index) => (
        <Marquee
          key={index}
          direction={index === 0 ? "left" : "right"}
          imagesurls={item}
        />
      ))}
      {/* <Marquee /> */}
    </div>
  );
}

export default Marquees;
