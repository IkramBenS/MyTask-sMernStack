import React, {useEffect} from 'react';
import Alltasks from "../../components/Alltasks/Alltasks";
import Sidebar from "../../components/admin/SideBar/Sidebar"

//redux
import { useDispatch } from 'react-redux';
import { getTasks } from '../../redux/actions/taskActions';


const AlltasksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
          dispatch(getTasks());
  }, [dispatch]);

  return (
    <section>
        <div className="row">
          <div class="col-2">
            <Sidebar />
          </div>

        <div className="col-9" style={{ marginLeft: `60px`}}>
            <Alltasks />
          </div>          
        </div>
        
    </section>
  

  );
};
export default AlltasksPage;
