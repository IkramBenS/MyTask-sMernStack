import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import AdminHeader from '../AdminHeader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from '../../redux/actions/userActions';

const AdminEditUser = ({ match, history }) => {
    /********************************
     * PARAMETRES
     ********************************/ 
    const userId = match.params.userId;

     /********************************
     * REDUX GLOBAL STATE PROPERTIES
     ********************************/ 
    const dispatch = useDispatch();
    const { user } =  useSelector(state => state.users);

     /********************************
     * COMPONENT STATE PROPERTIES
     ********************************/ 
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [title, settitle] = useState('');
    const [tel, settel] = useState('');


    /********************************
     * LIFECYCLEMETHODS
     ********************************/ 
    useEffect(() => {
        if (!user){
            dispatch(getUser(userId));
        } else {
            setusername(user.username)
            setemail(user.email)
            settitle(user.title)
            settel(user.tel)
        
        }
    },[dispatch, userId, user]);

    /****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleUserSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('username', username);
		formData.append('email', email);
		formData.append('title', title);
		formData.append('tel', tel);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		await axios
			.put(`/api/users/${userId}`, formData, config)
			.then(res => {
				history.push('/allusers'); 
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
								<form onSubmit={handleUserSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Update User
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>										
											<div className='form-group'>
												<label className='text-secondary'>
													Name
												</label>
												<input
													type='text'
													className='form-control'
													name='username'
													value={username}
													onChange={e =>
														setusername(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Email
												</label>
												<textarea
													className='form-control'
													rows='3'
													name='email'
													value={email}
													onChange={e =>
														setemail(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Title
												</label>
												<input
													type='text'
													className='form-control'
													name='title'
													value={title}
													onChange={e =>
														settitle(
															e.target.value
														)
													}
												/>
											</div>

											<div className='form-group'>
											
													<label className='text-secondary'>
														phone
													</label>
													<input
														type='text'
														className='form-control'
														name='tel'
														value={tel}
														onChange={e =>
															settel(
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

export default AdminEditUser;