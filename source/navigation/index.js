import React from "react";
import { Router as LRouter } from "react-native-router-flux";
import routes from "./routes";

const Router = () => <LRouter scenes={routes} />;
export default Router;
