import React from "react";
import './Sidebar.css' ;
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul >
        {SidebarData.map((val, key) => {
          return (
            <div className='row__container'>
              <li key={key} className='navbar-toggle'>
                <Link to={val.path} className='menu-bars'>
                    {val.icon}
                    <span>
                        {val.title}
                    </span>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;