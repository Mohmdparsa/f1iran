import image7 from "../../assets/image7.jpeg";
import { IoPersonOutline } from "react-icons/io5";
import image1 from "../../assets/NewsSidebarImage/image1.jpg";
import image2 from "../../assets/NewsSidebarImage/image2.jpg";
import image3 from "../../assets/NewsSidebarImage/image3.jpeg";
import image4 from "../../assets/NewsSidebarImage/image4.jpg";
import image5 from "../../assets/NewsSidebarImage/image5.jpg";

const NewsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 shadow-lg w-[22rem] rounded-lg max-w-md mx-auto my-10 bg-gray-600 text-white h-[85rem]">
      <h2 className="text-3xl font-bold mb-4 -mt-[30rem] md:-mt-[32rem]">خبر</h2>
      <h3 className="text-xl font-bold mb-4">آخرین خبرهای فرمول یک</h3>
      <div className="inline-block w-[19rem] min-w-[4em] h-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 mb-7"></div>
      <img src={image7} alt="" className="w-full h-64 object-cover mb-4" />
      <div className="flex mb-8">
        <IoPersonOutline style={{ marginTop: "5px" }} />
        <span>سیدعلی حسینی</span>{" "}
        <span style={{ marginRight: "17px" }}> آخرین خبرها,استرالیا </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">
        بارش باران در تمرین دوم فرمول یک استرالیا 2023
      </h3>
      <p className="text-white">
        با توجه به اینکه در مرحله دوم تمرینی فرمول یک استرالیا تنها 20 دقیقه
        پیست خشک بود، فرناندو آلونسو توانست با ثبت زمانی به ... ادامه...
      </p>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="w-[19rem] h-[6rem] -mr-7">
            <div className="flex ">
              <img
                src={image1}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">دنیل ریکاردو حتی نمی داند که چرا عملکردش افت داشت</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            <br />
            <div className="flex ">
              <img
                src={image2}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">مرسدس در مورد عدم استفاده از دستور تیمی توضیح داد</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" />  <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            <br />
            <div className="flex ">
              <img
                src={image3}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">روزرسانی مرسدس اواسط ماه می از راه می رسد</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" />  <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            <br />
            <div className="flex ">
              <img
                src={image4}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">آینده مبهم آدرین نیوی</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" />  <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            <br />
            <div className="flex ">
              <img
                src={image5}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" />  <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
