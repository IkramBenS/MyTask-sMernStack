import React from "react";
import './Sidebar.css' ;
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <div className='row__container'>
              <li key={key} className='row'>{" "}
                <Link to={val.path}>
                    {val.icon}
                    <span>
                        {val.title}
                    </span>
                </Link>
                {/* <div className='rowicon'>{val.icon}</div>{" "}
                <div className='rowtitle'>{val.title}</div>{" "} */}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;