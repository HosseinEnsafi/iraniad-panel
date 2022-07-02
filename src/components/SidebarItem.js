import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SidebarSubItem = ({ title, icon }) => {
  return <li className="bg-gray-400 pr-10 "></li>;
};

function SidebarItem({ item }) {
  const [openSubItems, setOpenSubItems] = useState(false);

  const { icon, title, subItems } = item;
  return (
    <li className={`cursor-pointer  select-none`}>
      <div
        onClick={() => setOpenSubItems((prevState) => !prevState)}
        className={`flex w-full justify-between px-3  hover:text-red-500 dark:hover:text-red-400 ${
          openSubItems && subItems
            ? "  pb-2 text-red-500 dark:text-red-400"
            : ""
        }`}
      >
        <div className="flex gap-4">
          <span className="self-center">{icon}</span>
          <p>{title}</p>
        </div>

        {subItems && (
          <span>{openSubItems ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </div>

      {openSubItems && subItems && (
        <ul className=" space-y-4 bg-zinc-200 py-2 dark:bg-slate-500">
          {subItems &&
            subItems.map((subItem, i) => (
              <li key={i} className="px-6">
                <p>{subItem.title}</p>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;
