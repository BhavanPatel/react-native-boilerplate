import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

import { bs } from "../../../theme";
import Global from "../../../lib/common";

class Container extends Component {
  render() {
    const { children, theme } = this.props;
    const themeColor = theme.colors;

    const barStyle =
      Global.isDarkOrLight(themeColor) !== "dark"
        ? "dark-content"
        : "light-content";
    return (
      <SafeAreaView style={bs.flex}>
        <StatusBar backgroundColor={themeColor} barStyle={barStyle} />
        {children}
      </SafeAreaView>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.any
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Container);
