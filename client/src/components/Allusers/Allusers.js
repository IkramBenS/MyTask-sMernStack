import {React, useState} from "react";

import Card from '../Card';
// redux
import { useSelector } from 'react-redux';



const Allusers = () => {

  const { users } = useSelector(state => state.users);
  /* const [filtredUser, setFiltredUsers] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [Allusers];

    result = Allusers.filter((data) => {
      return data.username.toLowerCase().search(value) !== -1;
    });

    setFiltredUsers(result);
  }; */

  return(
  <div className='container'>
    {/******************************* search user ******************/}
{/*     <div className="dropdown form-group" style={{ width: "12rem" }}>
      <input
            className="form-control"
            type="text"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            placeholder="Search course"
            onChange={(e) => handleSearch(e)}
        ></input>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {filtredUser.map(({ username, _id }) => (
              <Link className="dropdown-item" to={`/courseInfos/${_id}`}>
                {productName}
              </Link>
            ))}
          </div> */}
    {/******************************* display all users ******************/}
      <div>
        {users && users.map(user => (
                <Card key={user._id} user={user} />
          ))}
      </div>
         
  </div>
  );
};

export default Allusers;



