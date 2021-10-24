import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getProject} from '../../redux/actions/projectActions';

const AdminEditProject = ({ match, history }) => {
    /********************************
     * PARAMETRES
     ********************************/ 
    const projectId = match.params.projectId;
	console.log(projectId);

     /********************************
     * REDUX GLOBAL STATE PROPERTIES
     ********************************/ 
    const dispatch = useDispatch();
    const { proj } =  useSelector(state => state.projects);

     /********************************
     * COMPONENT STATE PROPERTIES
     ********************************/ 
    const [project, setproject] = useState('');


    /********************************
     * LIFECYCLEMETHODS
     ********************************/ 
    useEffect(() => {
        if (!proj){
            dispatch(getProject(projectId));
        } else {
              setproject(proj.project)
           
        
        }
    },[dispatch, projectId, proj]);

    /****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleProjectSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('project', project);

	const dataToSend ={project};
	console.log(dataToSend);


		await axios
			.post(`/api/project/${projectId}`, dataToSend)
			.then(res => {
				history.push('/addproject');
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
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/addproject'>
							<span className='fas fa-arrow-left'>Go Back</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleProjectSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Update Project
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>										
											<div className='form-group'>
												<label className='text-secondary'>
													Project title
												</label>
												<input
													type='text'
													className='form-control'
													name='project'
													value={project}
													onChange={e =>
														setproject(
															e.target.value
														)
													}
												/>
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

export default AdminEditProject;