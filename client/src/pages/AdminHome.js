import React from "react";
import './AdminHome.css';
import Sidebar from "../components/admin/SideBar/Sidebar"



function AdminHome() {
  return (
    <div className="row">
        <div class="col-2">
          <Sidebar />
        </div>

        <div class="col-10">
          <h1>admin home</h1>
        </div>   
    </div>


  );
}

export default AdminHome;