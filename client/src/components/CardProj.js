import React from 'react';
import { Link } from 'react-router-dom';
// redux
import {useDispatch} from 'react-redux';
import './Card.css';
import { deleteProject } from '../redux/actions/projectActions';

const CardProj= ({ project }) => {
    const dispatch = useDispatch();
    return(
        <div className="card">
        <div className="card-body">
            <div className="row">

                <div className="col-md-8">
                    <p className="card-text">{project.project}</p>
                </div>
            

                <div className="col-md-4">
                    <Link
                        to = {`/admin/edit/project/${project._id}`} 
                        type='button'
                        className='btn btn-outline-info btn-block mb-4'
                        >
                        <i className='far fa-edit pr-1'></i>
                        Edit 
                    </Link>

                    <button 
                        type='button' 
                        className='btn btn-outline-danger btn-block mb-4' 
                        onClick={() => dispatch(deleteProject(project._id))}
                    >
                        <i className='far fa-trash-alt pr-1'></i>
                            Delete
                    </button>
                </div>
            </div>
        </div>
      </div>
    )
};

export default CardProj;