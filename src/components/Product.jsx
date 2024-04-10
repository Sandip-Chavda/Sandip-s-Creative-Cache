import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full h-[23rem] py-20">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl font-bold ">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-2xl">{val.description}</p>
          <div className="flex items-center justify-evenly">
            {val.live && <Button title="Live Site" link={val.live} />}
            {val.case && <Button title="Github" link={val.case} />}
          </div>
        </div>
      </div>
    </div>
  );
}
// 1 6 19
export default Product;
