import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] px-10 py-3 flex justify-between items-center bg-[#323232] border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] border-[#ffffff]">
      <img className="w-24" src={val.url} alt="images" />
      <span className="font-bold">{val.number}</span>
    </div>
  );
}

export default Stripe;
