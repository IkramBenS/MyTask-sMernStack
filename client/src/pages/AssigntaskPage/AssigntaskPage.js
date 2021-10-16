import React from "react";
import Sidebar from "../../components/admin/SideBar/Sidebar"
import Assigntask from "../../components/Assigntask/Assigntask";
import assigntask from '../../components/assets/assigntask.jpg';

function AssigntaskPage() {
  return (
    <div className="row">
        <div class="col-2">
          <Sidebar />
        </div>

        <div className="col-5">
            <Assigntask />
          </div>
          <div className="col-5 ">
            <img src={assigntask} />
          </div>  
    </div>


  );
}

export default AssigntaskPage;