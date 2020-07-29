import axios from "axios";

//Create customized instance of axios
export default axios.create({
  baseURL: "https://dim-sum-cart.herokuapp.com/api/v1",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
