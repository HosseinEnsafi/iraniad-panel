import {
  BiBroadcast,
  BiBulb,
  BiBuoy,
  BiCaretLeftCircle,
  BiCaretUpSquare,
  BiCast,
  BiCategoryAlt,
  BiCctv,
  BiCertification,
  BiCheckShield,
} from "react-icons/bi";

export const sidebarData = [
  {
    title: "آیتم اول",
    icon: <BiBroadcast />,
    subItems: [
      {
        title: "ایتم اول-اول",
        icon: <BiBulb />,
      },
      {
        title: "ایتم اول-دوم",
        icon: <BiBuoy />,
      },
    ],
  },

  {
    title: "آیتم دوم",
    icon: <BiCaretLeftCircle />,
  },
  {
    title: "آیتم سوم",
    icon: <BiCast />,
    subItems: [
      {
        title: "ایتم سوم-اول",
        icon: <BiCaretUpSquare />,
      },
      {
        title: "ایتم سوم-دوم",
        icon: <BiCategoryAlt />,
      },
      {
        title: "ایتم سوم-سوم",
        icon: <BiCertification />,
      },
    ],
  },
  {
    title: "آیتم چهارم",
    icon: <BiCctv />,
  },
  {
    title: "آیتم پنجم",
    icon: <BiCheckShield />,
  },
];
