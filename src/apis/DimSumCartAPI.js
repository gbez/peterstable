import axios from "axios";

//Create customized instance of axios
//https://dim-sum-cart.herokuapp.com
//localhost:3000
export default axios.create({
  baseURL: "https://dim-sum-cart.herokuapp.com/api/v1",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
