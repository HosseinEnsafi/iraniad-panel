import React from "react";
import NavbarItem from "./SidebarItem";
function SidebarList({ items }) {
  console.log(items);
  return (
    <ul className=" space-y-8">
      {items.map((item, i) => (
        <NavbarItem key={i} item={item} />
      ))}
    </ul>
  );
}

export default SidebarList;
