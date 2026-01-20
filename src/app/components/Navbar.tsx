"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header w-full shadow-md top-0 left-0 z-50">
      <div className="navbar max-w-6xl mx-auto p-4 flex justify-between items-center ">
        
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
            <Image
              src="/images/profilelogo.jpg"
              alt="profilepic"
              width={56}
              height={56}
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 2.5rem, (max-width: 1024px) 3rem, 3.5rem"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
          <li><a href="#About">About</a></li>
          <li><a href="#MyProjects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Achievements">Achievements</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

        {/* Hamburger / Close Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <IoCloseSharp /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><a href="#About" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#MyProjects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#Achievements" onClick={() => setIsOpen(false)}>Achievements</a></li>
            <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
