
import instagram from "../../assets/Instagram.png";

const FirstNav = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black p-4 h-[9rem]">
      <h1 className="text-5xl font-bold text-white md:text-left self-center md:self-start pt-4 md:pt-6 md:ml-64 lg:ml-80 ml-6">
        F1IRAN
      </h1>
      <img
        src={instagram}
        alt="Logo"
        className="h-[4rem] w-[30rem] rounded-lg ml-2 mt-2 md:mt-0"
      />
    </div>
  );
};

export default FirstNav;
