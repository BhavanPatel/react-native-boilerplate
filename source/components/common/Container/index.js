//Global Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

//Global Libraries
import Global from "@common-functions";

//Styling
import { bs } from "../../../theme";

class Container extends Component {
  render() {
    const { children, theme, status, statusBgColor } = this.props;
    const themeColor = theme.colors;
    const dark = "dark-content";
    const light = "light-content";

    const barStylePro = status === "dark" ? dark : light;
    const barStyleDef =
      Global.isDarkOrLight(themeColor) !== "dark" ? dark : light;

    return (
      <SafeAreaView style={bs.flex}>
        <StatusBar
          backgroundColor={statusBgColor ? statusBgColor : themeColor}
          barStyle={status ? barStylePro : barStyleDef}
        />
        {children}
      </SafeAreaView>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.any,
  status: PropTypes.string,
  statusBgColor: PropTypes.string
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Container);
