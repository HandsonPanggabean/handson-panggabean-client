import Axios from "../helpers/axios";

export const initiateAssistant = () => {
  return Axios.get(`/assistant/initiate`);
};

export const talkToAssistant = (body) => {
  return Axios.post(`/assistant/talk`, body);
};
