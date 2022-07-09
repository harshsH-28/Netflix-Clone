import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-netflix-bg bg-cover h-[55vh] md:h-[75vh] flex flex-col justify-center items-center font-custom ">
      <Navbar />
      <div className="text-white w-3/4 flex flex-col items-center mt-14">
        <h1 className="font-bold text-[1.7em] leading-tight break-all text-center mb-4">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="font-semibold text-[1.05em] leading-tight break-all text-center mb-4">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="font-normal text-[1.1em] leading-tight break-all text-center mb-2">
          Ready to watch?Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Email address"
            className="border-1 border-slate-600 w-[90vw] px-2 py-3 text-black focus:outline-none focus:border-blue-600 focus:border-1"
          />
          <button className="bg-[#e50914] mt-4 px-4 py-2 rounded-sm">
            Get Started &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
