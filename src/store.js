import { createStore } from "redux";

const initialState = {
  lang: "en",
  messages: [],
  is_server_sleep: false,
  is_open_ai_modal_chat: false,
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "SET_LANGUAGE":
      return { ...state, ...rest };
    case "SET_MESSAGES":
      return { ...state, ...rest };
    case "SET_SERVER_STATUS":
      return { ...state, ...rest };
    case "SET_AI_MODAL_CHAT":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
