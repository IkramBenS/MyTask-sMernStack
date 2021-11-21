import React from 'react';
import { Link } from 'react-router-dom';
// redux
import {useDispatch} from 'react-redux';
import './Card.css';
import { deleteTask } from '../redux/actions/taskActions';

const CardTask= ({ task }) => {
    const dispatch = useDispatch();

    return(
        <div className="card">
        <h5 className="card-header header">{task.taskTitle}</h5>
        { <div className="card-body">
            <div className="row">

                <div className="col-md-8">
                    <h5 className="card-title">{task.taskUser}</h5>
                    <p className="card-text">{task.taskProj}</p>
                    <p className="card-text">{task.taskDesc}</p>
                    <p className="card-text">{task.taskStatus}</p>

                </div>
            

                <div className="col-md-4">
                    <Link
                        to = {`/admin/edit/task/${task._id}`}
                        type='button'
                        className='btn btn-outline-info btn-block mb-4'
                        >
                        <i className='far fa-edit pr-1'></i>
                        Edit 
                    </Link>

                    <button 
                        type='button' 
                        className='btn btn-outline-danger btn-block mb-4' 
                        onClick={() => dispatch(deleteTask(task._id))}
                    >
                        <i className='far fa-trash-alt pr-1'></i>
                            Delete
                    </button>
                </div>
            </div>
        </div> }
      </div>
    )
};

export default CardTask;








