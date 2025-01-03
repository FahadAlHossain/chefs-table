import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white w-full md:w-4/5 m-auto p-4 md:p-7 flex items-center justify-between">
      {/* Title Section */}
      <div className="flex items-center">
        <a className="text-black text-2xl font-bold">Recipe Calories</a>
      </div>

      {/* Navigation Menu (Visible on Desktop, Centered) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-black"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-black"
            >
              Recipes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-black"
            >
              Search
            </a>
          </li>
        </ul>
      </div>

      {/* Search Input + Profile (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Input */}
        <div className="form-control relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 rounded-3xl placeholder-gray-600 p-2 pl-9 md:w-56"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 font-bold text-xl" />
        </div>

        {/* Profile Avatar */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>

      {/* Hamburger + Profile on Mobile */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Profile Avatar (Mobile) */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-gray-700"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu (Navigation + Search Input) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 z-50 md:hidden">
          {/* Navigation Menu */}
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-black"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-black"
              >
                Search
              </a>
            </li>
          </ul>

          {/* Search Input (Mobile Only) */}
          <div className="form-control relative mt-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-200 rounded-3xl placeholder-gray-600 p-2 pl-9 w-full"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 font-bold text-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
