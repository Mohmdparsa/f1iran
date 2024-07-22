import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { PiFlagBannerFoldThin } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import {
  IoPersonOutline,
  IoEnterOutline,
  IoCarSportOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { useState, useEffect } from "react";

const SecondNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleResize = () => {
    const breakpoint = 900;
    if (window.innerWidth > breakpoint) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <div className="flex items-center md:dir-ltr">
          <button className="text-white focus:outline-none">
            <FaSearch />
          </button>
        </div>

        <div className="lg:hidden lg:flex space-x-11 md:dir-ltr">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-0 inset-x-0 mt-[12rem] bg-black text-white p-4 space-y-2">
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
