import React from "react";
import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const projects = useSelector(state => state.project.projects);
  return (
    <div className="project-list section">
      {projects && projects.map(project => <ProjectSummary key={project.id} project={project} />)}
    </div>
  );
};

export default ProjectList;
