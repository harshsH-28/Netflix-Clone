import React from "react";

export default function Section(props) {
  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-[60vh]">
      <h1 className="text-white w-[75vw] font-bold text-[1.56em] leading-tight break-all text-center mb-4">
        {props.heading}
      </h1>
      <h2 className="text-white w-[75vw] font-semibold text-[1.1em] leading-tight break-all text-center mb-4">
        {props.sheading}
      </h2>
      <img src={props.img} alt="..." className="w-[90vw]" />
    </div>
  );
}
