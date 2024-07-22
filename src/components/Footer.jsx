const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-[5rem] h-[16rem] rounded-xl">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold">
            {" "}
            تمام حقوق مادی و معنوی محتواهای این رسانه متعلق به گروه موتوراسپورت
            و فرمول یک ایران میباشد.
          </h2>
          <p className="mt-2">حق نشر © 2015 – 2022 فرمول یک ایران</p>
        </div>
        <div className="border-t border-gray-700 py-4 text-center mt-[3rem]">
          <nav className="space-x-10 -mt-3">
            <a href="#" className="ml-10 hover:text-orange-500">
              ثبت نام
            </a>
            <a href="#" className="hover:text-orange-500">
              توییت
            </a>
            <a href="#" className="hover:text-orange-500">
              خبر
            </a>
            <a href="#" className="hover:text-orange-500">
              عکس
            </a>
            <a href="#" className="hover:text-orange-500">
              ویدیو
            </a>
            <a href="#" className="hover:text-orange-500">
              قیمت خودرو
            </a>
            <a href="" className="hover:text-orange-500">
              قوانین
            </a>
            <a href="" className="hover:text-orange-500">
              تماس با ما
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
