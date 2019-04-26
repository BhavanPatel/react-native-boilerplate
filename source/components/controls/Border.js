import React from "react";
import { View, Animated } from "react-native";
import PropTypes from "prop-types";

import { bs } from "../../theme";
import { getBorderProps, buildBorderStyle } from "./utils";
import { getTheme } from "./theme";

const Border = props => {
  const { theme, animated, transparent, ...otherProps } = props;
  const { borderProps, borderOtherProps } = getBorderProps(otherProps);
  const Comp = animated ? Animated.View : View;
  const styles = getTheme(theme);
  const borderStyle = buildBorderStyle(borderProps, styles.style("border"));

  if (transparent) borderStyle.push(bs.bg_transparent);
  return <Comp style={borderStyle} {...borderOtherProps} />;
};

Border.defaultProps = {
  theme: "std"
};

Border.propTypes = {
  theme: PropTypes.any,
  animated: PropTypes.bool,
  transparent: PropTypes.bool
};
export default Border;
