import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import FolderIcon from '@material-ui/icons/Folder';

export const SidebarData = [
  {
    title: "Home",
    path: '/adminhome',
    icon: <HomeIcon />,
  },
  {
    title: "Add user",
    icon: <PersonAddIcon />,
    path: '/adduser',
  },
  {
    title: "Assign task",
    icon: <PlaylistAddRoundedIcon />,
  },
  {
    title: "Projects",
    icon: <FolderIcon />,
  },
  {
    title: "Tasks",
    icon: <AssignmentIcon />,
  },
  {
    title: "Completed",
    icon: <CloudDoneIcon />,
  },
  {
    title: "Chat",
    icon: <CommentOutlinedIcon />,
  },
];