import React from "react";

function UserProfileItem({ text, icon }) {
  return (
    <li className="flex items-center gap-2 text-sm duration-200 hover:text-red-400">
      {icon}
      <p >{text}</p>
    </li>
  );
}

export default UserProfileItem;
