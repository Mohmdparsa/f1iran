import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
const UserPanel = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6  w-[22rem] rounded-lg max-w-md mx-auto my-10 bg-white text-white ">
        <div className="flex flex-col items-center justify-center  bg-orange-yellow-gradient text-white font-bold text-xl w-[21rem] rounded-lg h-[10rem] -mt-[14rem]">
          <h1 className="text-lg mb-4">فرمول یک ایران را دنبال کنید</h1>
          <div className="flex space-x-5 ">
            <a href="#" style={{ marginLeft: "17px" }}>
              <FaInstagram className="h-[3rem] w-[3rem]" />
            </a>
            <a href="#">
              <FaTelegram className="h-[3rem] w-[3rem]" />
            </a>
            <a href="#">
              <FaWhatsapp className="h-[3rem] w-[3rem]" />
            </a>
            <a href="#">
              <IoLogoTwitter className="h-[3rem] w-[3rem]" />
            </a>
          </div>
        </div>
        <div class="bg-gradient-to-r from-cyan-400 to-blue-500 flex flex-col items-center justify-center w-[21rem] h-[4rem]  text-white mt-8 rounded-xl">
          <p class="text-lg md:text-xl">پنل کاربری</p>
        </div>
        <form className="flex flex-col space-y-7">
          <input
            type="text"
            placeholder="نام کاربری"
            className="bg-gray-200 w-[21rem] rounded-lg h-[3rem] mt-8"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="bg-gray-200 w-[21rem]  rounded-lg h-[3rem]"
          />
          <button className="bg-blue-600 text-white w-[21rem] h-[2rem] rounded-lg">
            ورود
          </button>
        </form>
        <div class="bg-gradient-to-r from-cyan-400 to-blue-500 flex flex-col items-center justify-center w-[21rem] h-[4rem]  text-white mt-8 rounded-xl">
          <p class="text-lg md:text-xl">رده بندی تیم ها</p>
        </div>

        <table className=" text-center table-auto mt-[5rem] text-black w-[21rem] rounded-lg h-[30rem]">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-500 text-white">pos</th>
              <th className="border px-6 py-2 w-1/2 bg-gray-500 text-white">
                تیم
              </th>
              <th className="border px-4 py-2 bg-gray-500 text-white">
                امتیاز
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>1</td>
              <td className="hover:bg-gray-500 hover:text-white">
                Redbull racing
              </td>
              <td style={{ backgroundColor: "lightgray" }}>87</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>2</td>
              <td className="hover:bg-gray-500 hover:text-white">
                Aston martin
              </td>
              <td style={{ backgroundColor: "lightgray" }}>38</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>3</td>
              <td className="hover:bg-gray-500 hover:text-white">Mercedes</td>
              <td style={{ backgroundColor: "lightgray" }}>38</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>4</td>
              <td className="hover:bg-gray-500 hover:text-white">Ferari</td>
              <td style={{ backgroundColor: "lightgray" }}>26</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>5</td>
              <td className="hover:bg-gray-500 hover:text-white">Alpine</td>
              <td style={{ backgroundColor: "lightgray" }}>8</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>6</td>
              <td className="hover:bg-gray-500 hover:text-white">Alfa romeo</td>
              <td style={{ backgroundColor: "lightgray" }}>4</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>7</td>
              <td className="hover:bg-gray-500 hover:text-white">Hass</td>
              <td style={{ backgroundColor: "lightgray" }}>1</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>8</td>
              <td className="hover:bg-gray-500 hover:text-white">williams</td>
              <td style={{ backgroundColor: "lightgray" }}>1</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>9</td>
              <td className="hover:bg-gray-500 hover:text-white">Mac laren</td>
              <td style={{ backgroundColor: "lightgray" }}>0</td>
            </tr>
            <hr className="border-t border-gray-400 " />
            <tr>
              <td style={{ backgroundColor: "lightgray" }}>10</td>
              <td className="hover:bg-gray-500 hover:text-white">Alfa tauri</td>
              <td style={{ backgroundColor: "lightgray" }}>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPanel;
