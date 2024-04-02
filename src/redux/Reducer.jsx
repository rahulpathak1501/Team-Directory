import { constantList } from "./ActionConstant";

export const initialState = {
  person_list: [],
  person_role: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case constantList.PERSON_LIST: {
      // console.log("reducer", action);
      return {
        ...state,
        person_list: action.person_list,
      };
    }
    case constantList.PERSON_ROLE: {
      // console.log("reducer", action);
      return {
        ...state,
        person_role: action.person_role,
      };
    }
    default:
      return state;
  }
};

export default reducer;
