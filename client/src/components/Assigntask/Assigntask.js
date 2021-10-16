import React, { Fragment, useState } from "react";
import "./Assigntask.css";
//import { adduser } from "../../api/auth";

function Assigntask() {
  /*******************************************
   *VIEWS
   *******************************************/
  const showAssignForm = () => (
    <Fragment>
      <h3 className="text1">Assign New Task</h3>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label className="text-secondary">Projects</label>
          <select className="custom-select mr-sm-2">
            <option value="">Choose one...</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <label className="text-secondary">Assign to </label>
          <select className="custom-select mr-sm-2">
            <option value="">Users...</option>
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

  return <div className="forum_inputs container">{showAssignForm()}</div>;
}

export default Assigntask;
