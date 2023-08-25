"use client";

import React, { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <button
        onClick={handleClick}
        className="
      flex 
      flex-col 
      justify-center 
      items-center
      lg:hidden
      bg-white
      border-0"
      >
        <span
          className={`
    bg-primary 
    block 
    transition-all 
    duration-300 
    ease-out 
    h-0.5 w-6 rounded-sm
    ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
        ></span>
        <span
          className={`
    bg-primary 
    block 
    transition-all 
    duration-300 
    ease-out 
    h-0.5 w-6 rounded-sm
    ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`
    bg-primary 
    block 
    transition-all 
    duration-300 
    ease-out 
    h-0.5 w-6 rounded-sm
    ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
        ></span>
      </button>
    </div>
  );
}
