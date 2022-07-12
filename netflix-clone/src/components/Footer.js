import React from "react";

export default function Footer() {
  return (
    <div className="bg-black p-6">
      <p className="text-[#737373] p-6 text-sm">
        Questions? Call 000-800-040-1843
      </p>
      <div className="flex flex-col flex-shrink">
        <div className="flex flex-col items-center">
          <a className="text-[#737373] m-2 text-xs" href="#">
            FAQ
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Investor Relations
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Privacy
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Speed Test
          </a>
        </div>
        <div className="flex flex-col items-center flex-1">
          <a className="text-[#737373] m-2 text-xs" href="#">
            Help Centre
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Jobs
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Cookie Preferences
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Legal Notices
          </a>
        </div>
        <div className="flex flex-col items-center flex-1">
          <a className="text-[#737373] m-2 text-xs" href="#">
            Account
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Ways to Watch
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Corporate Information
          </a>
          <a className="text-[#737373] m-2 text-xs" href="#">
            Only on Netflix
          </a>
        </div>
        <div className="flex flex-col items-center flex-1">
          <a className="text-[#737373] m-2 text-xs" href="#">
            Media Centre
          </a>

          <a className="text-[#737373] m-2 text-xs" href="#">
            Terms of Use
          </a>

          <a className="text-[#737373] m-2 text-xs" href="#">
            Contact Us
          </a>
        </div>
      </div>
      <div className="m-10">
        <select
          name="language"
          id="language"
          className="bg-transparent text-[#737373] outline-white p-4 focus:outline-white"
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
        </select>
      </div>
      <p className="text-[#737373] p-2 text-sm">Netflix India</p>
    </div>
  );
}
