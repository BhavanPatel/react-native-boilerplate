import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

import { getTheme } from "./theme";
import {
  extendStyle,
  getBorderProps,
  buildBorderStyle,
  getTextProps,
  buildTextStyle
} from "./utils";

const Edit = props => {
  const { onRef, theme, border, style, pointerEvents, ...otherProps } = props;
  const { borderProps, borderOtherProps } = getBorderProps(otherProps);
  const { textProps, textOtherProps } = getTextProps(borderOtherProps);

  const styles = getTheme(theme);
  const newStyle = buildTextStyle(textProps, styles.style("edit"));
  extendStyle(newStyle, style);

  if (!border) {
    return (
      <TextInput
        ref={onRef}
        style={newStyle}
        placeholderTextColor={styles.style("edit.placeholder")}
        pointerEvents={pointerEvents}
        {...textOtherProps}
      />
    );
  }

  const borderStyle =
    style || buildBorderStyle(borderProps, styles.style("edit.border"));
  return (
    <View style={borderStyle} pointerEvents={pointerEvents}>
      <TextInput
        ref={onRef}
        style={newStyle}
        placeholderTextColor={styles.style("edit.placeholder")}
        {...textOtherProps}
      />
    </View>
  );
};

Edit.propTypes = {
  pointerEvents: PropTypes.any,
  theme: PropTypes.any,
  type: PropTypes.any,
  style: PropTypes.any,
  border: PropTypes.bool,
  onRef: PropTypes.any
};

Edit.defaultProps = {
  theme: "std",
  underlineColorAndroid: "rgba(0,0,0,0)"
};

export default Edit;
