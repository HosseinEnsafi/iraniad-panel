import {
  AiOutlineFire,
  BiBroadcast,
  BiCreditCard,
  BiSupport,
  BsListUl,
  IoPricetagOutline,
  IoTicketOutline,
  TbDiscount2,
} from "./icons";

export const sidebarUserData = [
  [
    { title: "پر فروش ترین ها", icon: <BiBroadcast />, to: "best-sellers" },
    {
      title: "تخفیف ها و پیشنهاد ها",
      icon: <TbDiscount2 />,
      to: "amazing-suggestion",
    },
    { title: "فروشنده شوید", icon: <TbDiscount2 />, to: "be-seller" },
    {
      title: "پیشنهاد شگفت انگیز",
      icon: <AiOutlineFire />,
      to: "amazing-suggestion",
    },
    { title: "پشتیبانی", icon: <BiSupport />, to: "support" },
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
    to: "/admin/users-list",
  },
  {
    title: "قیمت دهی محصولات",
    icon: <IoPricetagOutline />,
    to: "/admin/pricing-products",
  },
  {
    title: "پاسخ به تیکت ها",
    icon: <IoTicketOutline />,
    to: "/admin/answering-tickets",
  },
  { title: "تسویه حساب", icon: <BiCreditCard />, to: "/admin/checkout" },
];

export const productsData = [
  {
    category_id: 58,
    name: "ممبر اجباری گروه تلگرام",
    label: "کم ریزش",
    period: [
      { start: "1", end: "4999", price: 700 },
      {
        start: "5000",
        end: "9999",
        price: 650,
      },
      {
        start: "10000",
        end: "19999",
        price: 600,
      },
      {
        start: "20000",
        end: "49999",
        price: 550,
      },
      {
        start: "50000",
        end: "100000",
        price: 500,
      },
    ],
  },
];
