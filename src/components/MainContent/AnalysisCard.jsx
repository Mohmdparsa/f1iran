import { IoPersonOutline } from "react-icons/io5";
import image6 from "../../assets/image6.jpeg"
import image66 from "../../assets/NewsSidebarImage/image66.jpg"
import image7 from "../../assets/NewsSidebarImage/image7.jpg"
import image8 from "../../assets/NewsSidebarImage/image8.jpeg"
import image9 from "../../assets/NewsSidebarImage/image9.jpg"
import image2 from "../../assets/image2.jpg"

const AnalysisCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 shadow-lg w-[22rem] rounded-lg max-w-md mx-auto my-10 bg-gray-200 text-black">
        <h2 className="text-3xl font-bold mb-14 -mt-[1rem] md:mt-7">ایستگاه تحلیل</h2>
        <div className="inline-block w-[19rem] min-w-[4em] h-0.5 self-stretch  opacity-100 dark:opacity-50 mb-7 bg-black"></div>
        <img src={image6} alt="" className="w-full h-64 object-cover mb-4" />
        <div className="flex mb-8">
          <IoPersonOutline style={{ marginTop: "5px" }} />
          <span>سیدعلی حسینی</span>{" "}
          <span style={{ marginRight: "17px" }}> آخرین خبرها,استرالیا </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          مروری بر عملکرد خارق العاده سرجیو پرز در پیست های خیابانی
        </h3>
        <p className="text-black">
          سرجیو پرز یکی از رانندگان خیلی خوب در پیست های خیابانی است، در این
          مقاله سعی داریم که چرایی این موضوع را بیشتر دریابیم.... ادامه...
        </p>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
        <div className="w-[19rem] h-[6rem] -mr-7">
            <div className="flex ">
              <img
                src={image66}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">یا فراری می تواند که از ردبول در این فصل سبقت بگیرد؟</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            </div>
            <br />
            <div className="w-[19rem] h-[6rem] -mr-6">
            <div className="flex ">
              <img
                src={image7}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">آینده مبهم آدرین نیوی</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            </div>
            <br />   <div className="w-[19rem] h-[6rem] -mr-6">
            <div className="flex ">
              <img
                src={image8}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">دنیل ریکاردو حتی نمی داند که چرا عملکردش افت داشت</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            </div>
            <br />   <div className="w-[19rem] h-[6rem] -mr-6">
            <div className="flex ">
              <img
                src={image9}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">مرسدس در مورد عدم استفاده از دستور تیمی توضیح داد</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            </div>
            <br />   <div className="w-[19rem] h-[6rem] -mr-6">
            <div className="flex ">
              <img
                src={image2}
                alt=""
                className="w-[6rem] h-[6rem] mr-0  rounded-lg"
              />
              <div className="flex flex-col">
                <p className="mt-3 mr-2 text-bold text-sm">مک‌لارن به شدت در حال استخدام افراد برتر تیم های دیگر است</p>
                <p className="mt-2 mr-2 text-xs flex"><IoPersonOutline className="mt-1" /> <span className="ml-2">سید علی حسینی </span><span>آخرین خبرها,استرالیا</span> </p>
              </div>
            </div>
            </div>
      </div>
    </>
  );
};

export default AnalysisCard;
