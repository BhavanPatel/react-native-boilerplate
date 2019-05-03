//Global Libraries
import React, { Component } from "react";
import LottieView from "lottie-react-native";

//Styling
import { images } from "../../../theme";

class Loader extends Component {
  render() {
    return <LottieView source={images.loader} autoPlay loop />;
  }
}

export default Loader;
