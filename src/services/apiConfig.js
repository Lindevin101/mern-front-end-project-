import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://formula1-api-238f33f4ace2.herokuapp.com/api",
  development: "https://formula1-api-238f33f4ace2.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;