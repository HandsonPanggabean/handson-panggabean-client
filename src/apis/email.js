import Axios from "../helpers/axios";

export const sendMessageToMyEmail = (body) => {
  return Axios.post(`/email/send`, body);
};