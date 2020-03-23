import React from "react";

const ProjectDetails = props => {
  const { match } = props;
  const id = match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Do ut in velit sint qui nisi nisi exercitation fugiat nostrud aute.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by anonimus</div>
          <div>2nd September</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
