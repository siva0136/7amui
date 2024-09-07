import axios from "axios";

class ServerCall {
  static sendGetReq(url) {
    return axios.get(url);
  }
  static sendPostReq(url, data) {
    return axios.post(url, data);
  }
  static sendPutReq(url, data) {
    return axios.put(url, data);
  }
  static sendDeleteReq(url) {
    return axios.delete(url);
  }
}

export default ServerCall;
