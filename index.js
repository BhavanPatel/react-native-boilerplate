import { AppRegistry } from "react-native";
import Kernel from "./source";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Kernel);
