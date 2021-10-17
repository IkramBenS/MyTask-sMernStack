import React from "react";
import './AdminHome.css';
import Sidebar from "../../components/admin/SideBar/Sidebar"
import Home from "../../components/admin/Home/Home";
import './AdminHome.css'




function AdminHome() {
  return (
    <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        
        <div className="col-10">
        <h1 style={{  textAlign: 'center'}}>WELCOME ,</h1>
          <Home />
        </div>

     
    </div>


  );
}

export default AdminHome;