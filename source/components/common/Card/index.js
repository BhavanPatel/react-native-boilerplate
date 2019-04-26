import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { bs, sizes, colors } from "../../../theme";

const Card = props => {
  const { children, style, button, onPress } = props;
  if (button) {
    return (
      <TouchableOpacity style={[styles.card, style]} onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.bool,
  style: PropTypes.any,
  onPress: PropTypes.func
};

const styles = {
  card: {
    ...bs.bg_white,
    ...bs.ph_2x,
    ...bs.pv_2x,
    ...bs.start_start,
    width: sizes.screen.width - sizes.em(30),
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 5
  }
};
export default Card;
