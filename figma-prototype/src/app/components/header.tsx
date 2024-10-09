'use client'

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white py-2 px-4 w-full border-b-2">
      {/* Logo */}
      <div className="font-black text-2xl sm:text-3xl lg:text-4xl">
        SHOP.CO
      </div>

      {/* Menu for larger screens */}
      <nav className="hidden md:flex">
        <ul className="flex mx-3 font-light text-lg">
          <li className="mx-4 cursor-pointer">Shop</li>
          <li className="mx-4 cursor-pointer">On Sale</li>
          <li className="mx-4 cursor-pointer">New Arrivals</li>
          <li className="mx-4 cursor-pointer">Brands</li>
        </ul>
      </nav>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button  onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:hidden">
          <ul className="flex flex-col items-start font-light text-lg p-4">
            <li className="py-2 cursor-pointer">Shop</li>
            <li className="py-2 cursor-pointer">On Sale</li>
            <li className="py-2 cursor-pointer">New Arrivals</li>
            <li className="py-2 cursor-pointer">Brands</li>
          </ul>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative m-3 w-1/2 lg:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="search"
          name="searchbar"
          placeholder="Search for products..."
          className="w-full py-3 px-12 border-none rounded-full placeholder-black bg-[#f0f0f0] placeholder-opacity-40 focus:outline-none"
        />
      </div>

      {/* Icons */}
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-3 ml-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </header>
  );
}

