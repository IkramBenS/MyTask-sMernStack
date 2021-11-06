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
    title: "All users",
    icon: <PersonAddIcon />,
    path: '/allusers',
  },
  {
    title: "Assign task",
    icon: <PlaylistAddRoundedIcon />,
    path: '/assigntask',

  },
  {
    title: "Projects",
    icon: <FolderIcon />,
    path: '/addproject',
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