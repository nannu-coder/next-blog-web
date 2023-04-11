import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const Taglist = ({ name, color }) => {
  return (
    <div className="flex mr-2 my-2">
      <Link
        className="bg-[#EFF1F4] px-4 py-1 rounded-full flex items-center"
        href="/"
      >
        <span className={`bg-[${color}] w-2 h-2 rounded-full mr-2`}></span>
        {/* <BsDot size={32} /> */}
        {name}
      </Link>
    </div>
  );
};

export default Taglist;
