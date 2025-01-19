import { createStore } from "redux";

const initialState = {
  dummyState: "",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "SET_DUMMY_STATE":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
