import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-100 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-500">
          এই ওয়েবসাইটে প্রকাশিত সকল তথ্য সংশ্লিষ্ট দপ্তর কর্তৃক নির্মিত। তথ্যের
          যথার্থতা, নির্ভুলতা ও নির্ভরযোগ্যতা নিশ্চিত করতে সংশ্লিষ্ট দপ্তর
          সর্বদা সচেষ্ট।
        </p>

        <div className="mt-3 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-3 text-xs sm:flex-row">
          <p className="text-center sm:text-left">
            সাইটটি শেষ হালনাগাদ করা হয়েছে: শনিবার, ৩০ সেপ্টেম্বর, ২০২৩ খ্রি
            ১৪:৪৯:০৮
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Image
              src="/footer_logo.png"
              alt="UNDP"
              width="400"
              height="100"
              className="h-auto w-full max-w-[400px]"
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
