import React from "react";
import userImg from "../../assets/img/none.jpg";
import {
  BiUser,
  BiWallet,
  BiTachometer,
  BiCart,
  BiListPlus,
  BiListOl,
  BiMoney,
} from "react-icons/bi";
import { useSelector } from "react-redux";
import UserProfileItem from "../UserProfileItem";
function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  const { name, wallet } = user;
  return (
    <div className="group relative flex cursor-pointer items-center">
      <BiUser className="hoverAnimation flex  h-10  w-10 items-center text-gray-500" />
      <span className="hidden transition-colors duration-300 group-hover:text-red-500 md:inline">
        {user.name}
      </span>
      <div className=" invisible absolute top-[125%] left-0 w-48 translate-y-2 divide-y-[1px] divide-gray-200 rounded-md bg-gray-100  opacity-0  shadow-md duration-200 group-hover:visible  group-hover:translate-y-0 group-hover:opacity-100 dark:divide-gray-500 dark:bg-neutral-700 ">
        <div className="flex items-center gap-2 p-2 pb-3">
          <div className="relative h-10 w-10 ">
            <img
              src={userImg}
              className="h-full w-full rounded-full"
              alt="user's imaage"
            />
            <span className=" absolute top-[28px]   h-2 w-2  rounded-full bg-green-500 "></span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className=" text-sm">{name}</p>
            <div className=" inline-flex items-baseline gap-2">
              <BiWallet className="h-4 w-4 text-red-400" />
              <p className=" self-center text-[13px] text-gray-600 dark:text-gray-300">
                {wallet} تومان
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
        <ul className="flex flex-col gap-[10px] py-3 px-2">
          <UserProfileItem
            icon={<BiTachometer />}
            text="داشبورد"
            to="/admin/dashboard"
          />
          <UserProfileItem icon={<BiCart />} text="ثبت سفارش" />
          <UserProfileItem icon={<BiListPlus />} text="سفارشات" />
          <UserProfileItem icon={<BiListOl />} text="لیست" />
          <UserProfileItem
            icon={<BiMoney />}
            to="transaction"
            text="تراکنش ها"
          />
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
