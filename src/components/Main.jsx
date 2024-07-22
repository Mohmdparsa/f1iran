import Header from "./Header/Header";
import ImageGallery from "./ImageGallery";
import Sidebars from "./MainContent/Sidebars";
import telegram from "../assets/telegram.png";
const Main = () => {
  return (
    <>
      <Header />
      <ImageGallery />
      <Sidebars />
      <img src={telegram} alt="" className="mr-[5rem]" />
    </>
  );
};

export default Main;
