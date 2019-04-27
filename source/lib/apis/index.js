import log from "@log";
import api from "./config";

class apis {}
apis.call = (url, params) => {
  return new Promise((resolve, reject) => {
    try {
      api.get(url, params).then(res => {
        resolve(res);
      });
    } catch (err) {
      log.error("API calling error:-", err);
      reject(err);
    }
  });
};

apis.getCountries = () => {
  return apis.call("/countries");
};

apis.getStats = () => {
  return apis.call("/stats");
};

apis.getCities = () => {
  return apis.call("/cities");
};

apis.getRestaurants = () => {
  return apis.call("/restaurants");
};

apis.getRestaurantInfo = param => {
  return apis.call("/restaurants", param);
};

export default apis;
