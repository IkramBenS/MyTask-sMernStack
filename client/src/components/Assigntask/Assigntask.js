import React, { Fragment, useState, useEffect} from "react";
import "./Assigntask.css";

import isEmpty from 'validator/lib/isEmpty';
import {showErrorMsg, showSuccessMsg} from '../../helpers/message';
import { showLoading } from '../../helpers/loading';
// redux
import  {useSelector, useDispatch} from 'react-redux';
import {clearMessages} from '../../redux/actions/messageActions';
import {createTask} from '../../redux/actions/taskActions';
/* import {getProjects} from '../../redux/actions/projectActions'
import {getUsers} from '../../redux/actions/userActions'
 */

const Assigntask = () => {
  /****************************
  * REDUX GLOBAL STATE PROPERTIES
  ***************************/
 
  const { projects } = useSelector(state => state.projects);
  const { users } = useSelector(state => state.users);

  const { loading } = useSelector(state => state.loading);
  const { successMsg, errorMsg } = useSelector(state => state.messages);

  const dispatch = useDispatch();

/*   useEffect(() => {
    dispatch(getProjects());
    dispatch(getUsers());
  }); */


  /********************************
  * COMPONENT STATE PROPERTIES
  ********************************/
   const [clientSideError, setClientSideError] = useState('');
   const [taskData, setTaskData] = useState({
       taskProj: '' ,
       taskUser: '',
       taskTitle: '',
       taskStatus: 'NEW',
       taskDesc: '',
   });

   const {
    taskProj,
    taskUser,
    taskTitle,
    taskDesc,
   } = taskData;

/********************************
 * EVENT HANDLERS
 ********************************/
 const handleMessages = (evt) => {
  dispatch(clearMessages());
  setClientSideError('');

};

const handleTaskChange = (evt) => {
  setTaskData({
      ...taskData,
      [evt.target.name]: evt.target.value,
  });

};

const handleTaskSubmit = evt => {
  evt.preventDefault();

  if ( isEmpty(taskTitle) ||
  isEmpty(taskDesc) ) 
  {
    setClientSideError('All fields are required');
  } else if (isEmpty(taskProj)) {
      setClientSideError('Please select a project');
  } else if (isEmpty(taskUser)) {
      setClientSideError('Please select a user')
  }  else { 

const dataToSend = {taskTitle,taskDesc,taskProj,taskUser,taskStatus:'NEW'};


      dispatch(createTask(dataToSend));
      setTaskData({
        taskProj: '',
        taskUser: '',
        taskTitle: '',        
        taskStatus: '',
        taskDesc: '',        
       
      });  
};
}
  /*******************************************
   *VIEWS
   *******************************************/
  return (
      <div onClick={handleMessages}>
          <form onSubmit = {handleTaskSubmit}>
          <div className='modal-body my-2'>
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}
              
              {
                  loading ? (
                      <div className='text-center'>{showLoading()} </div>                                  
                  ) : (

                    <Fragment>
                    <h3 className="text1">Assign New Task</h3>
                    {/********** project ************/}
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label className="text-secondary">
                              Projects
                        </label>
                        <select className="custom-select mr-sm-2"
                                name='taskProj'
                               
                                onChange={handleTaskChange}
                        >
                          <option value="">Choose one...</option>
                          {projects &&
                            projects.map((p) => (
                              <option key={p._id} >
                                {p.project}
                              </option>
                            ))}
                        </select>
                      </div>
                    {/********** assign to ************/}
                      <div className="form-group col-md-6">
                        <label className="text-secondary">Assign to </label>
                          <select className="custom-select mr-sm-2"
                                  name='taskUser'
                                  onChange={handleTaskChange}
                                  >
                            <option value="">Users...</option>
                            {users &&
                              users.map((u) => (
                                <option key={u._id} >
                                  {u.username}
                                </option>
                              ))}
                          </select>
                      </div>
                    </div>
                    {/********** task title ************/}
                    <div className="form-group">
                      <input type="text" 
                            className="form-control" 
                            placeholder="Task Title"
                            name='taskTitle'           
                            value={taskTitle}
                            onChange={handleTaskChange} />
                    </div>
                    
                     {/********** task description ************/}
                    <div className="form-group">
                      <textarea
                        rows="6"
                        className="form-control"
                        placeholder="Please describe task..."
                        name='taskDesc'
                        value={taskDesc}
                        onChange={handleTaskChange}
                      ></textarea>
                    </div>
                    {/********** buttons ************/}
                    <div className="modal-footer">
                      <button className="btn Closebtn">Cancel</button>
                      <button type="submit" className="btn Createbtn">
                        Submit
                      </button>
                    </div>
                  </Fragment>
                  )
              }                          
          </div>
          
          </form>
      </div>       

  ); 
 
  };


export default Assigntask;
