import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000",
  production: "https://ceostab.cyclic.app/",
};

const apiNoToken = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { apiNoToken };
