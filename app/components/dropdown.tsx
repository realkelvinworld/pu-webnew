import React from "react";
import { useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { dropdownProps } from "@/types/props";

export default function Dropdown({ details, employment }: dropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <button
        onClick={toggle}
        className="bg-blue-800 p-4 text-white w-full flex items-center justify-between font-semibold rounded-lg text-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        Details of the Course{" "}
        {!isOpen ? (
          <ArrowDown2 className="w-6 h-6" />
        ) : (
          <ArrowUp2 className="w-6 h-6" />
        )}
      </button>
      {/* details go here */}
      {isOpen && (
        <div className=" p-2 w-full overflow-hidden">
          <h1 className="font-semibold text-center text-xl">
            Programme Objectives
          </h1>
          <p className="text-lg">{details}</p>
          <h1 className="font-semibold text-center text-xl">
            Employment Prospects
          </h1>
          <p className="text-lg">{employment}</p>
        </div>
      )}
    </div>
  );
}
