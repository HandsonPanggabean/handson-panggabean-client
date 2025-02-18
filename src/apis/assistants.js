import Axios from "../helpers/axios";

export const initiateAssistant = (body) => {
  return Axios.post(`/assistant/initiate`, body);
};

export const talkToAssistant = (body) => {
  return Axios.post(`/assistant/talk`, body);
};
