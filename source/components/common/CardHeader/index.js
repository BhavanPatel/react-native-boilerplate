//Global Libraries
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

//Styling
import { bs } from "../../../theme";

const CardHeader = props => {
  const { children } = props;
  return <View style={styles.cardHeader}>{children}</View>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  cardHeader: {
    ...bs.center,
    ...bs.full_width
  }
};
export default CardHeader;
