import { NetInfo } from "react-native";

class connection {}

connection.status = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(NetInfo.getConnectionInfo());
    } catch (err) {
      console.log("Connection Error :-", err);
      reject(err);
    }
  });
};

connection.startListener = () => {
  function handleFirstConnectivityChange(connectionInfo) {
    console.log("Start Listener", connectionInfo.type);
  }
  NetInfo.addEventListener("connectionChange", handleFirstConnectivityChange);
};

connection.removeListener = () => {
  function handleFirstConnectivityChange(connectionInfo) {
    console.log("Remove Listener", connectionInfo.type);
  }
  NetInfo.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
};

export default connection;
