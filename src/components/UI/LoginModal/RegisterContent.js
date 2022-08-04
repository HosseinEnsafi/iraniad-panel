import React, { useEffect, useStaate } from "react";
import { useDispatch } from "react-redux";
import { BiRightArrowAlt, BiX } from "../../../assets/icons";
import { closeLogin } from "../../../redux";

function RegisterContent(props) {
  const dispatch = useDispatch();

  return (
    <div className={`duration-200 ${props.active ? "block" : "hidden"}`}>
      <button
        onClick={() => {
          props.onGoToSlide(0);
        }}
        className={`inline-flex items-center rounded-lg  bg-transparent
      p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900
       dark:hover:bg-gray-500 dark:hover:text-white `}
      >
        <BiRightArrowAlt className="h-[26px] w-[26px]" />
      </button>

      <h2 className="text-center text-lg">ایجاد حساب کاربری</h2>
    </div>
  );
}

export default RegisterContent;
