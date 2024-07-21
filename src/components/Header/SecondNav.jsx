import React from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { PiFlagBannerFoldThin } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoEnterOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const SecondNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white p-4" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex space-x-11">
          {/* Links */}
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> خانه</span>
            <IoHomeOutline style={{ marginTop: "5px", marginLeft: "5px" }} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> ماشین ها</span>
            <IoCarSportOutline
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> موتور اسپورت</span>
            <MdOutlineSportsMotorsports
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> فرمول یک</span>
            <PiFlagBannerFoldThin
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}>فروشگاه</span>
            <AiOutlineShoppingCart
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> تماس</span>
            <FiPhone style={{ marginTop: "5px", marginLeft: "5px" }} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> ثبت نام</span>
            <IoEnterOutline style={{ marginTop: "5px", marginLeft: "5px" }} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            style={{ marginLeft: "12px", display: "flex" }}
          >
            <span style={{ fontWeight: "bold" }}> ورود</span>
            <IoPersonOutline style={{ marginTop: "5px", marginLeft: "5px" }} />
          </a>
        </div>

        {/* Search Icon */}
        <div className="flex items-center">
          <button className="text-white focus:outline-none">
            <FaSearch />
          </button>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <FaTimes/> : <FaBars />}
          </button>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="mt-2 py-2 space-y-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> خانه</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> ماشین ها</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> موتور اسپورت</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> فرمول یک</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}>فروشگاه</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> تماس</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> ثبت نام</span>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            <span style={{ fontWeight: "bold" }}> ورود</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SecondNav;
