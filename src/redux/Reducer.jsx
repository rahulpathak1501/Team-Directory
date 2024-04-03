import { constantList } from "./ActionConstant";

export const initialState = {
  person_list: [],
  loading: true,
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
    case constantList.SET_LOADING: {
      // console.log("reducer", action);
      return {
        ...state,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};

export default reducer;
