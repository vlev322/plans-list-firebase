import ACTION from "../constants/actions";
const initState = {
  projects: [
    { id: 1, title: "Mollit eu", content: "et reprehenderit voluptate eiusmod nisi excepteur eu aliquip." },
    { id: 2, title: "Second u", content: "te eiusmodi excepteur eu aliquet reprehenderit volupta nisip." },
    { id: 3, title: "Third u", content: "erit voluptate eiusmoet reprehendd nisi excepteur eu aliquip." }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.CREATE_PROJECT:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
