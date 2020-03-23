import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../store/reducers/actions/projectActions";

const CreateProject = () => {
  const initialState = {
    title: "",
    content: ""
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProject(state));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sing In</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
