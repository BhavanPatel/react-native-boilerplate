import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

const List = props => {
  const { showScroll, ...otherProps } = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={showScroll}
      showsVerticalScrollIndicator={showScroll}
      {...otherProps}
    />
  );
};

List.propTypes = {
  showScroll: PropTypes.bool
};
List.defaultProps = {
  showScroll: false
};

export default List;
