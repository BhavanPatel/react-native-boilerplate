import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import { Landing, Home, Detail } from "../screens";
import { transitionCustomConfig } from "./config/transitionConfig";

const interpolator = {
  screenInterpolator: props => transitionCustomConfig(props)
};
const routes = Actions.create(
  <Scene key="app" hideNavBar transitionConfig={() => interpolator}>
    <Scene key="landing" component={Landing} initial />
    <Scene key="home" component={Home} />
    <Scene key="detail" component={Detail} />
  </Scene>
);

export default routes;
