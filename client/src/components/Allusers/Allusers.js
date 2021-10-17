import React from "react";

import Card from '../Card';
// redux
import { useSelector } from 'react-redux';



const Allusers = () => {

  const { users } = useSelector(state => state.users);

  return(
  <div className='container'>
          <div>
            {users && users.map(user => (
                    <Card key={user._id} user={user} />
              ))}
          </div>
  </div>
  );
};

export default Allusers;



