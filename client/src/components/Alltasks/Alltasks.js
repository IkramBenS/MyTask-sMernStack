import {React, useState} from "react";

import CardTask from '../CardTask';
// redux
import { useSelector } from 'react-redux';



const Alltasks = () => {

  const { tasks } = useSelector(state => state.tasks);

  return(
  <div className='container'>
    {/******************************* display all taks******************/}
      <div>
        {tasks && tasks.map(task => (
                <CardTask key={task._id} task={task} />
          ))}
      </div>
         
  </div>
  );
};

export default Alltasks;



