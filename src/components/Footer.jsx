import React from "react";
import logo from "../assets/images/logo.png";

function Footer() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="w-full mt-14">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-24">
        <div className="basis-1/2">
          <h1 className="text-[12rem] leading-none tracking-tight font-medium">
            Sandip.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3 ">
            <h4 className="mb-5 text-lg font-bold underline">Socials</h4>
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sandip-chavda-86704a2aa/",
              },
              { name: "Twitter", url: "https://twitter.com/SandipC70731202" },
              { name: "Github", url: "https://github.com/Sandip-Chavda" },
              { name: "Instagram", url: "https://www.instagram.com/" },
            ].map((link, index) => (
              <a
                key={index}
                target="_blank"
                href={link.url}
                className="block mt-1 text-xl hover:underline font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="basis-1/3 ">
            <h4 className="mb-5 text-lg font-bold underline">Socials</h4>
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sandip-chavda-86704a2aa/",
              },
              { name: "Twitter", url: "https://twitter.com/SandipC70731202" },
              { name: "Github", url: "https://github.com/Sandip-Chavda" },
              { name: "Instagram", url: "https://www.instagram.com/" },
            ].map((link, index) => (
              <a
                key={index}
                target="_blank"
                href={link.url}
                className="block mt-1 text-xl font-medium hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-lg font-medium text-right">
              I'm a Fullsatck Developer who is always ready to work with new
              Devs. and always ready to aquire knowledge and learn new things.
            </p>
            <img className="h-20 mt-3 w-40" alt="Sandip" src={logo} />
          </div>
        </div>
      </div>
      <p className="text-center text-xl py-10 font-medium text-[#ffffff]">
        {day} / {month} / {year} ©️ All rights reserved || Made with 💖By{" "}
        <a href="mailto:chavdas766@gmail.com" className="underline">
          SANDIP CHAVDA.
        </a>
      </p>
    </div>
  );
}

export default Footer;
