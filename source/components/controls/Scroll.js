import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { bs } from "../../theme";
import { extendStyle } from "./utils";
import { getTheme } from "./theme";

const Scroll = props => {
  const {
    theme,
    center,
    end,
    style,
    contentStyle,
    children,
    ...otherProps
  } = props;

  const styles = getTheme(theme);

  const newStyle = [styles.style("scroll")];
  extendStyle(newStyle, style);

  const newContentStyle = [styles.style("scroll.content")];
  if (center) newContentStyle.push(bs.center);
  if (end) newContentStyle.push(bs.end_center);
  extendStyle(newContentStyle, contentStyle);

  return (
    <KeyboardAwareScrollView
      style={newStyle}
      contentContainerStyle={styles.style("scroll.container")}
      {...otherProps}
    >
      <View style={newContentStyle}>{children}</View>
    </KeyboardAwareScrollView>
  );
};

Scroll.propTypes = {
  theme: PropTypes.any,
  style: PropTypes.any,
  center: PropTypes.bool,
  end: PropTypes.bool,
  contentStyle: PropTypes.any,
  children: PropTypes.node.isRequired
};
Scroll.defaultProps = {};

export default Scroll;
