//API signup method
import axios from "axios";

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signup", data, config);
  return response;
};

//API adduser method
export const adduser = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/adduser", data, config);
  return response;
};

//API signin method

export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signinuser", data, config);
  

  return response;
};

//API signin admin method

export const signinadmin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signinadmin", data, config); 

  return response;
};


