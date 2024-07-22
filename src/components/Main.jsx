import Header from "./Header/Header";
import ImageGallery from "./ImageGallery";
import Sidebars from "./MainContent/Sidebars";
import telegram from "../assets/telegram.png";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <Header />
      <ImageGallery />
      <Sidebars />
      <img
        src={telegram}
        alt=""
        className="mr-[1rem] md:mr-[4rem]  rounded-xl w-[28rem] sm:w-[33rem] md:w-[40rem] lg:w-[45rem]"
      />
      <Footer/>
    </>
  );
};

export default Main;
