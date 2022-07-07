import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidebarSubItem = ({ subItem, subItemSubs }) => {
  const [openSubItemSubs, setOpenSubItemSubs] = useState(false);
  return (
    <li className="px-4 tracking-tight text-gray-600 dark:text-gray-200">
      <div
        onClick={() => setOpenSubItemSubs((prevState) => !prevState)}
        className={`flex w-full justify-between px-3  hover:text-red-500 dark:hover:text-red-400 ${
          openSubItemSubs && subItemSubs
            ? "  pb-2 text-red-500 dark:text-red-400"
            : ""
        }`}
      >
        <p>{subItem.name}</p>

        {subItemSubs.length > 0 && (
          <span>{openSubItemSubs ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </div>
      {openSubItemSubs && subItemSubs && (
        <ul className="px-6 pt-1">
          {subItemSubs.map((subItmSub) => (
            <li key={subItmSub.id} className="py-1">
              {subItmSub.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function SidebarItem({ item }) {
  const [openSubItems, setOpenSubItems] = useState(false);
  const { icon, name, subCategories: subItems, to = "/" } = item;

  return (
    <li
      className={`cursor-pointer select-none tracking-tight  text-gray-500 dark:text-gray-200`}
    >
      <Link
        to={window.location.pathname}
        onClick={() => setOpenSubItems((prevState) => !prevState)}
        className={`flex w-full justify-between px-3  hover:text-red-500 dark:hover:text-red-400 ${
          openSubItems && subItems
            ? "  pb-2 text-red-500 dark:text-red-400"
            : ""
        }`}
      >
        <div className="flex gap-4">
          <span className="self-center">{icon}</span>
          <p>{name}</p>
        </div>

        {subItems && (
          <span>{openSubItems ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </Link>

      {openSubItems && subItems && (
        <ul className=" space-y-4 bg-zinc-200 py-2 dark:bg-neutral-500">
          {subItems &&
            subItems.map((subItem, i) => (
              <SidebarSubItem
                key={i}
                subItem={subItem}
                subItemSubs={subItem?.subCategories}
              />
            ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;
