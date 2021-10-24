import React, { useState, Fragment } from "react";
import "./Addproject.css";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../redux/actions/messageActions";
import { createProject } from "../../redux/actions/projectActions";

const AddprojectModal = () => {
  /****************************
   * REDUX GLOBAL STATE PROPERTIES
   ***************************/
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  /********************************
   * component State propreties
   ********************************/
  const [project, setProject] = useState("");
  const [clientSideErrorMsg, setClientSideErrorMsg] = useState("");

  /********************************
   * EVENT HANDLERS
   ********************************/
  const handleMessages = (evt) => {
    dispatch(clearMessages());
  };

  const handleProjectChange = (evt) => {
    dispatch(clearMessages());

    setProject(evt.target.value);
  };
  const handleProjectSubmit = (evt) => {
    evt.preventDefault();
    if (isEmpty(project)) {
      setClientSideErrorMsg("Please enter a project");
    } else {
      const data = { project };
      dispatch(createProject(data));
    }
  };
  /*******************************************
   *VIEWS
   *******************************************/
  return (
    <div id="addProjectModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleProjectSubmit}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Project</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>

            <div className="modal-body my-2">
              {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}

              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {loading ? (
                <div className="text-center">{showLoading()} </div>
              ) : (
                <Fragment>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Title"
                    onChange={handleProjectChange}
                    name="project"
                    value={project}
                  />
                </Fragment>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn Closebtn" data-dismiss="modal">
                Close{" "}
              </button>
              <button type="submit" className="btn Createbtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddprojectModal;
