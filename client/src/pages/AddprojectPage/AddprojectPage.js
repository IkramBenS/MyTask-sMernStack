import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/admin/SideBar/Sidebar"
import Addproject from "../../components/Addproject/Addproject"
import AddprojectModal from "../../components/Addproject/AddprojectModal";
import Allprojects from "../../components/Allprojects/Allprojects";
import { getProjects } from "../../redux/actions/projectActions";


const AddprojectPage = () => { const dispatch = useDispatch(); useEffect(() => { dispatch(getProjects()); }, [dispatch]); 
  return (
    <div className="row">
        <div class="col-2">
          <Sidebar />
        </div>

        <div className="col-5">
            <Addproject />
            <AddprojectModal/>
            <Allprojects />
          </div>
           
    </div>


  );
}

export default AddprojectPage;