import React from "react";
import SidebarItem from "./SidebarItem";

function SidebarList({ items }) {
  console.log(items);
  return (
    <ul className=" space-y-6">
      {/* {items && items.map((item, i) => <SidebarItem key={i} item={item} />)} */}
      {items && items.map((item, i) => <SidebarItem key={i} item={item} />)}
    </ul>
  );
}

export default SidebarList;
