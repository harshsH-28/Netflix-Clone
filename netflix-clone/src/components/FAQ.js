import React, { useState } from "react";

export default function FAQ(props) {
  const [faq, setFaq] = useState(0);
  return (
    <div>
      <button
        className="text-white text-left text-xl w-screen min-h-14 bg-[#303030] mb-2 px-6 py-[0.6em]"
        onClick={() => {
          if (!faq) setFaq(1);
          else setFaq(0);
        }}
      >
        {props.heading}
      </button>
      {faq ? (
        <p className="text-white text-left text-lg bg-[#303030] p-4 mb-2">
          {props.desc}
        </p>
      ) : null}
    </div>
  );
}
