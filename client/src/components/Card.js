import React from 'react';
import { Link } from 'react-router-dom';
// redux
import {useDispatch} from 'react-redux';
/* import  {deleteProduct} from '../redux/actions/productActions'; */
import './Card.css';

const Card= ({ user }) => {
    const dispatch = useDispatch();

    return(
        <div className="card">
        <h5 className="card-header header">{user.username}</h5>
        <div className="card-body">
            <div className="row">

                <div className="col-md-8">
                    <h5 className="card-title">{user.title}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.tel}</p>
                </div>
            

                <div className="col-md-4">
                    <Link
                        /* to = {`/admin/edit/product/${product._id}`} */
                        to = "#"
                        type='button'
                        className='btn btn-outline-info btn-block mb-4'
                        >
                        <i className='far fa-edit pr-1'></i>
                        Edit 
                    </Link>

                    <button 
                        type='button' 
                        className='btn btn-outline-danger btn-block mb-4' 
                        /* onClick={() => dispatch(deleteProduct(product._id))} */
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

export default Card;








