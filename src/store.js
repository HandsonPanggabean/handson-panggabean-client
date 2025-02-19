import { createStore } from "redux";

const initialState = {
  lang: "en",
  messages: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "SET_LANGUAGE":
      return { ...state, ...rest };
    case "SET_MESSAGES":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
