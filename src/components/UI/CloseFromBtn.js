import React from "react";
import { BiCheck, BiX } from "../../assets/icons";
function CloseFromBtn({ onClose, className }) {
  return (
    <button
      onClick={onClose}
      className={`inline-flex items-center rounded-lg  bg-transparent
      p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900
       dark:hover:bg-gray-500 dark:hover:text-white ${className}`}
    >
      <BiX className="h-[26px] w-[26px]" />
    </button>
  );
}

export default CloseFromBtn;
