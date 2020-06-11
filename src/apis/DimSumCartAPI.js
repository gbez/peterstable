import axios from "axios";

//Create customized instance of axios
export default axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1",
  headers: {
    //Get token from Redux store later
  },
});
