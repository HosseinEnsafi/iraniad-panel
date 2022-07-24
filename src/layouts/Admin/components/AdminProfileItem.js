import React from "react";
import { Link } from "react-router-dom";

function AdminProfileItem({ text, icon, to = "/", onClick }) {
  return (
    <li
      onClick={onClick}
      className="flex items-center gap-2 text-sm duration-200 hover:text-red-400"
    >
      {icon}
      <Link to={to}>{text}</Link>
    </li>
  );
}

export default AdminProfileItem;
