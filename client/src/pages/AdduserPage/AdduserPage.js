import React from "react";
import Adduser from "../../components/Adduser/Adduser";
import Sidebar from "../../components/admin/SideBar/Sidebar"
import computerWoman from '../../components/assets/computerWoman.png';
import "./AdduserPage.css"


const AdduserPage = () => {
  return (
      <div className="row">
          <div class="col-2">
            <Sidebar />
          </div>

          <div className="col-5">
            <Adduser />
          </div>

          <div className="col-5">
            <img src={computerWoman} />
          </div>  
      </div>   
  );
};

export default AdduserPage;
