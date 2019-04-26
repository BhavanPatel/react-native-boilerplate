import { create } from "apisauce";
import { URL } from "../../app/config";
const API_VERSION = "api";

const api = create({
  baseURL: `${URL}/${API_VERSION}/`,
  headers: { Accept: "application/json" }
});

export default api;
