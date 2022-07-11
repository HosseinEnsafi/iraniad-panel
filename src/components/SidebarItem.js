import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidebarSubItem = ({ subItem, subItemSubs }) => {
  const [openSubItemSubs, setOpenSubItemSubs] = useState(false);
  return (
    <li className="px-4 tracking-tight text-gray-600 dark:text-gray-200">
      <Link
        to={subItemSubs.length === 0 && `/search?cat_id=${subItem.id}`}
        onClick={() => setOpenSubItemSubs((prevState) => !prevState)}
        className={`flex w-full justify-between px-3  hover:text-red-500 dark:hover:text-red-400 ${
          openSubItemSubs && subItemSubs.length > 0
            ? "  pb-2 text-red-500 dark:text-red-400"
            : ""
        }`}
      >
        <p>{subItem.name}</p>

        {subItemSubs.length > 0 && (
          <span>{openSubItemSubs ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </Link>
      {openSubItemSubs && subItemSubs.length > 0 && (
        <ul className="px-6 pt-1">
          <li key={subItem.id} className="py-1">
            <Link
              className="flex items-center pb-2 text-sm text-gray-500 dark:text-slate-200 "
              to={`/search?cat_id=${subItem.id}`}
            >
              <p> همه محصولات این دسته</p>
              <BiChevronLeft className="h-4 w-4" />
            </Link>
          </li>
          {subItemSubs.map((subItmSub) => (
            <li key={subItmSub.id} className="py-1">
              <Link to={`/search?cat_id=${subItmSub.id}`}>
                <p className=" text-[15x]">{subItmSub.name}</p>
              </Link>
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
          <p>{name}</p>
        </div>

        {subItems.length > 0 && (
          <span>{openSubItems ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </div>

      {openSubItems && subItems.length > 0 && (
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
