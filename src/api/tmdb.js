import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    apiKey: "c091163dd08a9adf7263bd0a129c45fc"
})