import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SidebarSubItem = ({ subItem, subItemSubs }) => {
  const [openSubItemSubs, setopenSubItemSubs] = useState(false);
  return (
    <li className="px-4">
      <div
        onClick={() => setopenSubItemSubs((prevState) => !prevState)}
        className={`flex w-full justify-between px-3  hover:text-red-500 dark:hover:text-red-400 ${
          openSubItemSubs && subItemSubs
            ? "  pb-2 text-red-500 dark:text-red-400"
            : ""
        }`}
      >
        <p>{subItem.title}</p>

        {subItemSubs && (
          <span>{openSubItemSubs ? <BiChevronDown /> : <BiChevronUp />}</span>
        )}
      </div>
      {openSubItemSubs && subItemSubs && (
        <ul className="px-6 pt-2">
          {subItemSubs.map((subItmSub) => (
            <li className="py-1">{subItmSub}</li>
          ))}
        </ul>
      )}
    </li>
  );
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
        <ul className=" space-y-4 bg-zinc-200 py-2 dark:bg-neutral-500">
          {subItems &&
            subItems.map((subItem, i) => (
              <SidebarSubItem
                key={i}
                subItem={subItem}
                subItemSubs={subItem?.subs}
              />
            ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;