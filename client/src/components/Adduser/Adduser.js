import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { adduser } from "../../api/auth";

function Adduser() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    title: "",
    tel: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const { username, email, password, password2, title, tel, successMsg, errorMsg } =
    formData;

  /*******************************************
   *EVENT HANDLE
   *******************************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //clientSide validation

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2) ||
      isEmpty(title) ||
      isEmpty(tel) 
      
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      const { username, email, password, title, tel } = formData;
      const data = { username, email, password, title, tel };
      setFormData({ ...formData, loading: true });

      adduser(data)
     
        .then((response) => {
          setFormData({
            username: "",
            email: "",
            password: "",
            password2: "",
            title: "",
            tel: "",
            loading: false,
            successMsg: response.data.successMessage,
          });

          /* history.push("/login"); */
        })
        .catch((err) => {
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /*******************************************
   *VIEWS
   *******************************************/
  const showSignupForm = () => (
    <form className="signupForm" onSubmit={handleSubmit} noValidate>
      <h3 className="text1">Add New USer</h3>
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="username"
          value={username}
          type="text"
          placeholder="Username"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
      {/* email */}
      <div className="form-group input-group">
        <div className=" input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>

        <input
          className="form-control"
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          autocomplete="new-password"
          onChange={handleChange}
        />
      </div>
      {/* password2 */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          type="password"
          name="password2"
          value={password2}
          placeholder="Retype password"
          autocomplete="new-password"
          onChange={handleChange}
        />
      </div>
     
      {/* title */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-info"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="title"
          value={title}
          type="text"
          placeholder="Title"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
      {/* tel */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-phone"></i>
          </span>
        </div>
        <input
          className="form-control"
          name="tel"
          value={tel}
          type="text"
          placeholder="Phone number"
          autocomplete="nope"
          onChange={handleChange}
        />
      </div>
       {/* signup button */}
       <div className="form-group">
        <button className="btn Signupbtn" type="submit">
          Submit
        </button>
      </div>

    
    </form>
  );

  return (
          <div className="forum_inputs container">
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {showSignupForm()}
    </div>
  );
}

export default Adduser;
