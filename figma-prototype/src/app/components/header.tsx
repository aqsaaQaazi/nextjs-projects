"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex 
      justify-between items-center bg-primary-darkBrown py-2 px-4 w-full border-b-2 border-secondary-mutedBeige"
    >
      <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-offWhite">
        SHOP.CO
      </div>

      <nav
        className="hidden 
      md:flex"
      >
        <ul className="flex mx-3 font-light text-lg text-neutral-offWhite">
          <li className="mx-4 cursor-pointer hover:text-secondary-mutedBeige">
            Shop
          </li>
          <li className="mx-4 cursor-pointer hover:text-secondary-mutedBeige">
            On Sale
          </li>
          <li className="mx-4 cursor-pointer hover:text-secondary-mutedBeige">
            New Arrivals
          </li>
          <li className="mx-4 cursor-pointer hover:text-secondary-mutedBeige">
            Brands
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary-darkBrown shadow-lg z-10 md:hidden">
          <ul className="flex flex-col items-start font-light text-lg p-4 text-neutral-offWhite">
            <li className="py-2 cursor-pointer hover:text-secondary-mutedBeige">
              Shop
            </li>
            <li className="py-2 cursor-pointer hover:text-secondary-mutedBeige">
              On Sale
            </li>
            <li className="py-2 cursor-pointer hover:text-secondary-mutedBeige">
              New Arrivals
            </li>
            <li className="py-2 cursor-pointer hover:text-secondary-mutedBeige">
              Brands
            </li>
          </ul>
        </div>
      )}

      <div className="relative m-3 w-1/2 lg:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-darkBrown"
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
          className="w-full py-3 px-12 border-none rounded-full placeholder-primary-darkBrown bg-neutral-lightGrey placeholder-opacity-40 focus:outline-none focus:scale-105 transition-all duration-500"
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
          className="w-6 h-6 mr-3 ml-3 cursor-pointer text-neutral-offWhite hover:scale-105 transition-all duration-400 active:text-neutral-lightGrey"
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
          className="w-6 h-6 ml-3 cursor-pointer text-neutral-offWhite hover:scale-105 transition-all duration-400 active:text-neutral-lightGrey"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 m-2 mx-4 text-neutral-offWhite"
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
    </header>
  );
}
