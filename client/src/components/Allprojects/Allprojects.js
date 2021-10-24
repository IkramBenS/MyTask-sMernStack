import React from "react";

import Card from '../Card';
// redux
import { useSelector } from 'react-redux';



const Allprojects = () => {

  const { projects } = useSelector(state => state.projects);

  return(
  <div className='container'>
          <div>
            {projects && projects.map(project => (
                    <Card key={project._id} project={project} />
              ))}
          </div>
  </div>
  );
};

export default Allprojects;



