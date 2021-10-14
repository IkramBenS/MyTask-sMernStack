//API signup method
import axios from "axios";

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signup", data, config);
  console.log('heeere i am');
  return response;
};

//API signin method

export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signin", data, config); 

  return response;
};

