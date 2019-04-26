import { Platform } from "react-native";
import sizes from "./sizes";
import colors from "./colors";

const pad = sizes.pad;
const pad1 = sizes.pad1;

const align = {
  content_center: {
    justifyContent: "center"
  },
  content_start: {
    justifyContent: "flex-start"
  },
  content_end: {
    justifyContent: "flex-end"
  },
  content_between: {
    justifyContent: "space-between"
  },
  content_around: {
    justifyContent: "space-around"
  },
  item_center: {
    alignItems: "center"
  },
  item_start: {
    alignItems: "flex-start"
  },
  item_end: {
    alignItems: "flex-end"
  },
  item_stretch: {
    alignItems: "stretch"
  },
  self_center: {
    alignSelf: "center"
  },
  self_start: {
    alignSelf: "flex-start"
  },
  self_end: {
    alignSelf: "flex-end"
  },
  self_stretch: {
    alignSelf: "stretch"
  }
};

const styles = {
  ...align,

  center: {
    ...align.content_center,
    ...align.item_center
  },
  center_stretch: {
    ...align.content_center,
    ...align.item_stretch
  },
  center_start: {
    ...align.content_center,
    ...align.item_start
  },
  center_end: {
    ...align.content_center,
    ...align.item_end
  },
  start_center: {
    ...align.content_start,
    ...align.item_center
  },
  start_stretch: {
    ...align.content_start,
    ...align.item_stretch
  },
  start_start: {
    ...align.content_start,
    ...align.item_start
  },
  start_end: {
    ...align.center_start,
    ...align.item_end
  },
  end_center: {
    ...align.content_end,
    ...align.item_center
  },
  end_stretch: {
    ...align.content_end,
    ...align.item_stretch
  },
  end_start: {
    ...align.content_end,
    ...align.item_start
  },
  end_end: {
    ...align.content_end,
    ...align.item_end
  },
  between_center: {
    ...align.content_between,
    ...align.item_center
  },
  between_stretch: {
    ...align.content_between,
    ...align.item_stretch
  },
  between_start: {
    ...align.content_between,
    ...align.item_start
  },
  between_end: {
    ...align.content_between,
    ...align.item_end
  },
  around_center: {
    ...align.content_around,
    ...align.item_center
  },
  around_stretch: {
    ...align.content_around,
    ...align.item_stretch
  },
  around_start: {
    ...align.content_around,
    ...align.item_start
  },
  around_end: {
    ...align.content_around,
    ...align.item_end
  },

  flex_row: {
    flexDirection: "row"
  },
  flex_col: {
    flexDirection: "column"
  },

  match_parent: {
    ...align.self_stretch,
    flex: 1
  },
  absolute_full: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  absolute: {
    position: "absolute"
  },

  bg_transparent: {
    backgroundColor: "transparent"
  },
  bg_white: {
    backgroundColor: colors.white
  },
  bg_black: {
    backgroundColor: colors.black
  },
  bg_grey: {
    backgroundColor: "grey"
  },
  text_white: {
    color: colors.white
  },
  text_black: {
    color: colors.black
  },
  text_center: {
    textAlign: "center"
  },
  text_left: {
    textAlign: "left"
  },
  text_right: {
    textAlign: "right"
  },
  text_justify: {
    textAlign: "justify"
  },

  text_heavy: {
    ...Platform.select({
      ios: {
        fontWeight: "800"
      },
      android: {
        fontFamily: "Nunito-ExtraBold"
      }
    })
  },
  text_bold: {
    ...Platform.select({
      ios: {
        fontWeight: "700"
      },
      android: {
        fontFamily: "Nunito-Bold"
      }
    })
  },
  text_normal: {
    fontWeight: "400"
  },
  text_semibold: {
    ...Platform.select({
      ios: {
        fontWeight: "600"
      },
      android: {
        fontFamily: "Nunito-SemiBold"
      }
    })
  },
  text_light: {
    ...Platform.select({
      ios: {
        fontWeight: "200"
      },
      android: {
        fontFamily: "Nunito-Light"
      }
    })
  },
  text_medium: {
    ...Platform.select({
      ios: {
        fontWeight: "500"
      },
      android: {
        fontFamily: "Nunito-Regular"
      }
    })
  },

  text_italic: {
    fontStyle: "italic"
  },
  text_underline: {
    textDecorationLine: "underline"
  },
  text_midline: {
    textDecorationLine: "line-through"
  },
  text_doubleline: {
    textDecorationLine: "underline line-through"
  },
  font_normal: {
    fontFamily: Platform.OS === "ios" ? "Nunito" : "Nunito-Regular"
  },
  m_status: {
    marginTop: sizes.statusbar
  },
  p_status: {
    paddingTop: sizes.statusbar
  },

  flex: {
    flex: 1
  },
  flex_none: {
    flex: undefined
  },
  flex_wrap: {
    flexWrap: "wrap"
  },

  full_width: {
    width: "100%"
  }
};

const tags1 = [
  "m",
  "ml",
  "mr",
  "mt",
  "mb",
  "mh",
  "mv",
  "p",
  "pl",
  "pr",
  "pt",
  "pb",
  "ph",
  "pv"
];
const tags2 = [
  "margin",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "marginHorizontal",
  "marginVertical",
  "padding",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "paddingHorizontal",
  "paddingVertical"
];
const tags3 = ["none", "xls", "xs", "sm", "md", "lg", "xlg"];

var i, k;
for (i = 0; i < tags3.length; i += 1) {
  for (k = 0; k < tags1.length; k += 1) {
    const style = {};
    style[tags2[k]] = pad * i;
    styles[`${tags1[k]}_${tags3[i]}`] = style;
  }
}

for (i = 1; i < 13; i += 1) {
  for (k = 0; k < tags1.length; k += 1) {
    const style = {};
    style[tags2[k]] = pad1 * i;
    styles[`${tags1[k]}_${i}x`] = style;
  }
}

export default styles;
