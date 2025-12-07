import Axios from "../helpers/axios";

export const getServerStatus = () => {
  return Axios.get("/check-server-status");
};
