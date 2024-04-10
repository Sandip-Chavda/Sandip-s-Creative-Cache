import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="font-edusabeginner h-full w-full text-white bg-gradient-to-tl from-[#000000] via-[#000000dd] to-[#000000] backdrop-blur-3xl">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

{
  /* <div className="font-edusabeginner h-full w-full text-white bg-gradient-to-tl from-[#510061] via-[#e68cf8] to-[#510061]"></div> */
}
