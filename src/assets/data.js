import { BiBroadcast, BiSupport, BiCreditCard } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { IoPricetagOutline, IoTicketOutline } from "react-icons/io5";

export const sidebarUserData = [
  [
    { title: "پر فروش ترین ها", icon: <BiBroadcast /> },
    { title: "تخفیف ها و پیشنهاد ها", icon: <TbDiscount2 /> },
    { title: "فروشنده شوید", icon: <TbDiscount2 /> },
    { title: "پیشنهاد شگفت انگیز", icon: <AiOutlineFire /> },
    { title: "پشتیبانی", icon: <BiSupport /> },
  ],
  [
    {
      title: "آیتم اول",
      subItems: [
        {
          title: "ایتم اول-اول",
          subs: ["گزینه اول", "گزینه دوم", "گزینه سوم"],
        },
        {
          title: "ایتم اول-دوم",
        },
      ],
    },

    {
      title: "آیتم دوم",
    },
    {
      title: "آیتم سوم",
      subItems: [
        {
          title: "ایتم سوم-اول",
        },
        {
          title: "ایتم سوم-دوم",
        },
        {
          title: "ایتم سوم-سوم",
        },
      ],
    },
    {
      title: "آیتم چهارم",
    },
    {
      title: "آیتم پنجم",
    },
  ],
];

export const sidebarAdminData = [
  {
    title: "لیست سفارشات",
    icon: <BsListUl className=" rotate-180" />,
  },
  { title: "قیمت دهی محصولات", icon: <IoPricetagOutline /> },
  { title: "پاسخ به تیکت ها", icon: <IoTicketOutline /> },
  { title: "تسویه حساب", icon: <BiCreditCard /> },
];
