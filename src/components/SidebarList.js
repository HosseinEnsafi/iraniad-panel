import React from "react";
import NavbarItem from "./SidebarItem";
function SidebarList({ items }) {
  return (
    <ul className=" space-y-6">
      {items && items.map((item, i) => <NavbarItem key={i} item={item} />)}
    </ul>
  );
}

export default SidebarList;
