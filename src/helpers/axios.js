import axios from "axios";
import getServerURL from "./getServerUrl";

const Axios = axios.create({
  baseURL: getServerURL(),
  withCredentials: true,
});

export default Axios;
