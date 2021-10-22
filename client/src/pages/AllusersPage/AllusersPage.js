import React, {useEffect} from 'react';
import Allusers from "../../components/Allusers/Allusers";
import Sidebar from "../../components/admin/SideBar/Sidebar"

//redux
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';


const AllusersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
          dispatch(getUsers());
  }, [dispatch]);

  return (
    <section>
        <div className="row">
          <div class="col-2">
            <Sidebar />
          </div>

        <div className="col-9" style={{ marginLeft: `60px`}}>
            <Allusers />
          </div>          
        </div>
        
    </section>
  

  );
};
export default AllusersPage;
