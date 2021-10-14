import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";

export const SidebarData = [
  {
    title: "Home",
    path: '/adminhome',
    icon: <DashboardIcon />,
  },
  {
    title: "Add user",
    icon: <MenuBookIcon />,
  },
  {
    title: "Assign task",
    icon: <MonetizationOnIcon />,
  },
  {
    title: "Completed",
    icon: <PersonIcon />,
  },
];