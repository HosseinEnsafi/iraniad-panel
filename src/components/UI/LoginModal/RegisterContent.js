import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
function RegisterContent(props) {
  return (
    <div className={`  duration-200 ${props.active ? "block" : "hidden"}`}>
      <BiRightArrowAlt
        onClick={() => {
          props.onGoToSlide(0);
        }}
        className="h-6 w-6 -translate-x-2 translate-y-2 cursor-pointer rounded-full bg-black text-white"
      />

      <h2 className="text-center text-lg">ایجاد حساب کاربری</h2>
    </div>
  );
}

export default RegisterContent;
