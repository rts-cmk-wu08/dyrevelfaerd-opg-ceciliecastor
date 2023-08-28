"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <section className="flex">
      <div className="flex">
        <button
          onClick={handleClick}
          className="
      flex 
      flex-col 
      justify-center 
      items-center
      lg:hidden
      bg-none
      border-0
      z-40"
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
      <nav
        //if isOpen is open (?) show menu or else (:) hide
        className={`
            mobile-nav
            w-full
            bg-secondary
            fixed
            top-0
            left-0
            right-0
            z-10
            text-center
            ${isOpen ? "" : "hidden"}
        `}
      >
        <ul className="mx-auto py-16">
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="/#home">Hjem</Link>
          </li>
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="/#about">Om os</Link>
          </li>
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="/#volunteer">Bliv Frivillig</Link>
          </li>
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="#rescue">Dyr i nød?</Link>
          </li>
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="#animals">Adopter et dyr</Link>
          </li>
          <li
            onClick={closeNav}
            className="
            text-primary
            font-medium
            text-lg
            md:text-2xl
            hover:text-contrast
            hover:underline
            py-8"
          >
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
