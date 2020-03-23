import ACTION from "../../constants/actions";

export const createProject = project => ({
  type: ACTION.CREATE_PROJECT,
  project
});
