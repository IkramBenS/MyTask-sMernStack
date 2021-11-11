import React, { Fragment, useState } from "react";
import "./Assigntask.css";
//import { adduser } from "../../api/auth";
import { useSelector } from "react-redux";


const Assigntask = () => {
  /****************************
        * REDUX GLOBAL STATE PROPERTIES
        ***************************/
  const { projects } = useSelector(state => state.projects);
  const { users } = useSelector(state => state.users);

  /*******************************************
   *VIEWS
   *******************************************/


  return (
    <Fragment>
      <h3 className="text1">Assign New Task</h3>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label className="text-secondary">Projects</label>
          <select className="custom-select mr-sm-2">
            <option value="">Choose one...</option>
            {projects &&
              projects.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.project}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group col-md-6">
          <label className="text-secondary">Assign to </label>
          <select className="custom-select mr-sm-2">
            <option value="">Users...</option>
            {users &&
              users.map((u) => (
                <option key={u._id} value={u._id}>
                  {u.username}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Task Title" />
      </div>

      <div className="form-group">
        <textarea
          rows="6"
          className="form-control"
          placeholder="Please describe task..."
        ></textarea>
      </div>

      <div className="modal-footer">
        <button className="btn Closebtn">Cancel</button>
        <button type="submit" className="btn Createbtn">
          Submit
        </button>
      </div>
    </Fragment>
  );
}

export default Assigntask;
