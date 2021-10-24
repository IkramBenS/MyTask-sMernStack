import axios from 'axios';

export const createProject = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/project', formData, config);

    return response;
};



// export const getProjects = async () => {
//     const response = await axios.get('/api/project');
//     return response;
// };
