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



