import React from "react";
import { BiLogOutCircle, BiUser, BiWallet } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import userImg from "../../../assets/img/none.jpg";

import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux";
import AdminProfileItem from "./AdminProfileItem";
function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { name, wallet, role } = user;
  return (
    <div className="group relative flex cursor-pointer items-center text-gray-600 dark:text-gray-100">
      <BiUser className="hoverAnimation flex  h-10  w-10 items-center text-gray-500" />
      <span className="hidden transition-colors duration-300 group-hover:text-red-500 md:inline">
        {user.name}
      </span>
      <div className=" invisible absolute top-[125%] left-0 w-48 translate-y-2 divide-y-[1px] divide-gray-200 rounded-md bg-gray-100  opacity-0  shadow-md duration-200 group-hover:visible  group-hover:translate-y-0 group-hover:opacity-100 dark:divide-gray-500 dark:bg-gray-700 ">
        <Link to={"/profile"} className="flex items-center gap-2 p-2 pb-3">
          <div className="relative h-10 w-10 ">
            <img
              src={userImg}
              className="h-full w-full rounded-full"
              alt="user's profile"
            />
            <span className=" absolute top-[28px]   h-2 w-2  rounded-full bg-green-500 "></span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center gap-1">
              <p className=" text-sm">{name}</p>
              <span className="text-xs">
                ({role === "OWNER" ? "ادمین" : "کاربر"})
              </span>
            </div>
            <div className=" inline-flex items-baseline gap-2">
              <BiWallet className="h-4 w-4 text-red-400" />
              <p className=" self-center text-[13px] text-gray-600 dark:text-gray-300">
                {wallet} تومان
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex flex-col gap-[10px] py-3 px-2">
          <AdminProfileItem
            icon={<BiLogOutCircle />}
            onClick={() => {
              dispatch(logoutUser());
              localStorage.removeItem("user");
            }}
            text="خروج"
          />
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
