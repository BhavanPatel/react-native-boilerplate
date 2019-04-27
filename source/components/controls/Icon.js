import React from "react";
import PropTypes from "prop-types";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import FDIcon from "react-native-vector-icons/Foundation";
import IOIcon from "react-native-vector-icons/Ionicons";
import ETIcon from "react-native-vector-icons/Entypo";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MTIcon from "react-native-vector-icons/MaterialIcons";
import OTIcon from "react-native-vector-icons/Octicons";
import ZCIcon from "react-native-vector-icons/Zocial";
import EVIcon from "react-native-vector-icons/EvilIcons";
import FTIcon from "react-native-vector-icons/Feather";
import ADIcon from "react-native-vector-icons/AntDesign";
import { sizes, bs } from "../../theme";
import { extendStyle } from "./utils";
import { getTheme } from "./theme";

const Icon = ({
  theme,
  name,
  size,
  sizeem,
  style,
  transparent,
  ...otherProps
}) => {
  let Component = FAIcon;
  let iconName = name;
  const iconSize = sizeem || sizes.em(size);

  const comps = [
    FAIcon,
    FA5Icon,
    SLIcon,
    FDIcon,
    IOIcon,
    ETIcon,
    MCIcon,
    MTIcon,
    OTIcon,
    ZCIcon,
    EVIcon,
    FTIcon,
    ADIcon
  ];
  const types = [
    "fa",
    "fa5",
    "sl",
    "fd",
    "io",
    "et",
    "mc",
    "mt",
    "ot",
    "zc",
    "ev",
    "ft",
    "ad"
  ];
  for (let i = 0; i < types.length; i += 1) {
    if (name.startsWith(`${types[i]} `)) {
      iconName = name.replace(`${types[i]} `, "");
      Component = comps[i];
      break;
    }
  }

  const styles = getTheme(theme);
  const newstyle = [styles.style("icon")];
  if (transparent) newstyle.push(bs.bg_transparent);
  extendStyle(newstyle, style);

  return (
    <Component
      name={iconName}
      size={iconSize}
      style={newstyle}
      color={styles.style("icon.color")}
      {...otherProps}
    />
  );
};

Icon.propTypes = {
  theme: PropTypes.any,
  name: PropTypes.string,
  size: PropTypes.number,
  sizeem: PropTypes.number,
  style: PropTypes.any,
  transparent: PropTypes.bool
};

export default Icon;
