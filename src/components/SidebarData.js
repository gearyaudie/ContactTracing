import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Logbook",
    path: "/logbook",
    icon: <FaIcons.FaBookOpen />,
    cName: "nav-text",
  },
  // {
  //   title: "Register",
  //   path: "/register",
  //   icon: <FaIcons.FaAddressBook />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Logout",
  //   path: "/login",
  //   icon: <AiIcons.AiOutlineLogout />,
  //   cName: "nav-text",
  // },
];
