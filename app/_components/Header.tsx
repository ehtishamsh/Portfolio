"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
function Header() {
  const path = usePathname();
  return (
    <header className="bg-transparent flex justify-center items-center py-6 px-11 max-sm:px-2 fixed top-0 right-0 left-0 z-50">
      <nav className="border border-white bg-transparent backdrop-blur-sm rounded-3xl text-gray-950 flex items-center w-3/5 max-sm:w-full transition-all duration-300">
        <Link href={"/"} className="w-1/3 text-center">
          <motion.div
            className={` w-full transition-all duration-300 rounded-3xl h-full p-2 ${
              path === "/"
                ? "text-black bg-white hover:bg-gray-200"
                : "text-white hover:text-gray-400"
            }`}
          >
            Home
          </motion.div>
        </Link>
        <Link
          href={"/contact"}
          className={`w-1/3 transition-all duration-300 rounded-3xl text-center p-2 ${
            path === "/contact"
              ? "text-black bg-white hover:bg-gray-200"
              : "text-white hover:text-gray-400"
          }`}
        >
          Contact
        </Link>
        <Link
          href={"/about"}
          className={`w-1/3 transition-all duration-300 rounded-3xl text-center p-2 ${
            path === "/about"
              ? "text-black bg-white hover:bg-gray-200"
              : "text-white hover:text-gray-400"
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
