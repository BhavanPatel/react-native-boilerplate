import { NetInfo } from "react-native";
import log from "@log";

class connection {}

connection.status = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(NetInfo.getConnectionInfo());
    } catch (err) {
      log.error("Connection Error :-", err);
      reject(err);
    }
  });
};

connection.startListener = () => {
  function handleFirstConnectivityChange(connectionInfo) {
    log.info("Start Listener", connectionInfo.type);
  }
  NetInfo.addEventListener("connectionChange", handleFirstConnectivityChange);
};

connection.removeListener = () => {
  function handleFirstConnectivityChange(connectionInfo) {
    log.info("Remove Listener", connectionInfo.type);
  }
  NetInfo.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
};

export default connection;
