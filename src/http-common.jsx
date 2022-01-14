import axios from "axios";

export default axios.create({
  baseURL: "https://backendmeudocinho.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});