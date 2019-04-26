import React from "react";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import { getBorderProps, buildBorderStyle } from "./utils";
import { getTheme } from "./theme";

export default class Button extends React.Component {
  state = {
    lastPress: 0
  };

  _onPress = () => {
    const curTime = new Date().getTime();
    const delta = curTime - this.state.lastPress;
    if (delta < 300 && this.props.onDoublePress) {
      this.setState({ lastPress: 0 });
      this.props.onDoublePress();
    } else if (this.props.fast || delta > 500) {
      this.setState({ lastPress: curTime });
      this.props.onPress && this.props.onPress();
    }
  };

  render() {
    const { theme, type, style, ...otherProps } = this.props;
    const { borderProps, borderOtherProps } = getBorderProps(otherProps);
    const styles = getTheme(theme);
    const borderStyle =
      style || buildBorderStyle(borderProps, styles.style("button"));

    if (type === "highlight") {
      return (
        <TouchableHighlight
          onPress={this._onPress}
          style={borderStyle}
          {...borderOtherProps}
        />
      );
    }

    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={borderStyle}
        {...borderOtherProps}
      />
    );
  }
}

Button.propTypes = {
  onDoublePress: PropTypes.func,
  theme: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.any,
  style: PropTypes.any,
  fast: PropTypes.bool
};

Button.defaultProps = {
  theme: "std",
  activeOpacity: 0.7,
  onDoublePress: null
};
