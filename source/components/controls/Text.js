import React from "react";
import { Text as CText, Animated } from "react-native";
import PropTypes from "prop-types";

import { extendStyle, getTextProps, buildTextStyle } from "./utils";
import { getTheme } from "./theme";

const Text = props => {
  const {
    theme,
    uppercase,
    letterspace,
    style,
    children,
    animated,
    ...otherProps
  } = props;
  const { textProps, textOtherProps } = getTextProps(otherProps);

  const Comp = animated ? Animated.CText : CText;
  const styles = getTheme(theme);
  const newStyle = buildTextStyle(textProps, styles.style("text"));
  extendStyle(newStyle, style);
  const child_upper = uppercase ? children.toUpperCase() : children;
  const child = letterspace ? child_upper.split("").join(" ") : child_upper;

  return (
    <Comp style={newStyle} {...textOtherProps}>
      {child}
    </Comp>
  );
};

Text.propTypes = {
  theme: PropTypes.any,
  style: PropTypes.any,
  uppercase: PropTypes.bool,
  letterspace: PropTypes.bool,
  animated: PropTypes.bool,
  children: PropTypes.node
};

export default Text;
