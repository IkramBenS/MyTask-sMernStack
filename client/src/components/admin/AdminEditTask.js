import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import AdminHeader from '../AdminHeader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getTask} from '../../redux/actions/taskActions';

const AdminEditTask = ({ match, history }) => {
    /********************************
     * PARAMETRES
     ********************************/ 
    const taskId = match.params.taskId;
	console.log(taskId);

     /********************************
     * REDUX GLOBAL STATE PROPERTIES
     ********************************/ 
    const dispatch = useDispatch();
    const { task } =  useSelector(state => state.tasks);

     /********************************
     * COMPONENT STATE PROPERTIES
     ********************************/ 
    const [taskTitle, setTaskTitle] = useState('');
    const [taskUser, setTaskUser] = useState('');
    const [taskProj, setTaskProj] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState('');


    /********************************
     * LIFECYCLEMETHODS
     ********************************/ 
    useEffect(() => {
        if (!task){
            dispatch(getTask(taskId));
        } else {
            setTaskTitle(task.taskTitle)
            setTaskUser(task.taskUser)
            setTaskProj(task.taskProj)
            setTaskDesc(task.taskDesc)
            setTaskStatus(task.taskStatus)

        }
    },[dispatch, taskId, task]);

    /****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleTaskSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('taskTitle', taskTitle);
		formData.append('taskUser', taskUser);
		formData.append('taskProj', taskProj);
		formData.append('taskDesc', taskDesc);

	const dataToSend ={taskTitle,taskUser,taskProj,taskDesc};
	console.log(dataToSend);


		await axios
			.post(`/api/task/${taskId}`, dataToSend)
			.then(res => {
				history.push('/alltasks'); 
			})
			.catch(err => {
				console.log(err);
			});
	};

    /********************************
     * RENDER
     ********************************/ 
     return (
		<Fragment>
			<AdminHeader />
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/allusers'>
							<span className='fas fa-arrow-left'>Go Back</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleTaskSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Update Task
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>										
											<div className='form-group'>
												<label className='text-secondary'>
													Task Name
												</label>
												<input
													type='text'
													className='form-control'
													name='taskTitle'
													value={taskTitle}
													onChange={e =>
														setTaskTitle(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													UserTask
												</label>
												<textarea
													className='form-control'
													rows='3'
													name='taskUser'
													value={taskUser}
													onChange={e =>
														setTaskUser(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													TaskProject
												</label>
												<input
													type='text'
													className='form-control'
													name='taskProj'
													value={taskProj}
													onChange={e =>
														setTaskProj(
															e.target.value
														)
													}
												/>
											</div>

											<div className='form-group'>
											
													<label className='text-secondary'>
														Task description
													</label>
													<input
														type='text'
														className='form-control'
														name='taskDesc'
														value={taskDesc}
														onChange={e =>
															setTaskDesc(
																e.target.value
															)
														}
													>
														
													</input>

											</div>
										</Fragment>
									</div>
									<div className='modal-footer'>
										<button
											type='submit'
											className='btn btn-warning text-white'
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AdminEditTask;