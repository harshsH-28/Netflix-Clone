import React from "react";
import logo from "../Assets/logo.png";

export default function Navbar() {
  return (
    <div className="absolute top-0">
      <div className="w-screen flex justify-around items-center mt-6">
        <img src={logo} alt="..." width="100" height="40" className="mr-14" />
        <div className="flex justify-evenly my-2">
          <div className="mr-4">
            <select
              name="language"
              id="language"
              className="bg-transparent text-white border-white"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>
          <button className="bg-[#e50914] rounded-[.3em] w-max px-2 py-0 h-max text-white">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
