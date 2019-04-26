import _ from "lodash";
import { bs, sizes } from "../../../theme";

function extendStyle(styles, styleex) {
  if (!Array.isArray(styles)) return;

  if (styleex) {
    if (Array.isArray(styleex)) {
      _.each(styleex, st => styles.push(st));
    } else {
      styles.push(styleex);
    }
  }
}

function getTextProps(props) {
  const {
    bold,
    medium,
    heavy,
    semibold,
    light,
    italic,
    underline,
    midline,
    doubleline,
    size,
    sizeem,
    color,
    center,
    left,
    right,
    justify,
    transparent,
    line,
    fontsf,
    fontav,
    ...textOtherProps
  } = props;
  return {
    textProps: {
      bold,
      medium,
      heavy,
      semibold,
      light,
      italic,
      underline,
      midline,
      doubleline,
      size,
      sizeem,
      color, // eslint-disable-line
      center,
      left,
      right,
      justify,
      transparent,
      line,
      fontsf,
      fontav // eslint-disable-line
    },
    textOtherProps
  };
}

function buildTextStyle(props, basestyle) {
  const {
    bold,
    medium,
    heavy,
    semibold,
    light,
    italic,
    underline,
    midline,
    doubleline,
    size,
    sizeem,
    color,
    center,
    left,
    right,
    justify,
    transparent,
    line,
    fontav
  } = props;

  const newStyle = [basestyle];
  if (bold) newStyle.push(bs.text_bold);
  if (heavy) newStyle.push(bs.text_heavy);
  if (medium) newStyle.push(bs.text_medium);
  if (semibold) newStyle.push(bs.text_semibold);
  if (light) newStyle.push(bs.text_light);
  if (italic) newStyle.push(bs.text_italic);
  if (underline) newStyle.push(bs.text_underline);
  if (midline) newStyle.push(bs.text_midline);
  if (doubleline) newStyle.push(bs.text_doubleline);
  if (center) newStyle.push(bs.text_center);
  if (left) newStyle.push(bs.text_left);
  if (right) newStyle.push(bs.text_right);
  if (justify) newStyle.push(bs.text_justify);
  if (size) newStyle.push({ fontSize: sizes.em(size, null, false) });
  if (sizeem) newStyle.push({ fontSize: sizeem });
  if (color) newStyle.push({ color });
  if (line) newStyle.push({ lineHeight: sizes.em(line, null, false) });
  if (transparent) newStyle.push(bs.bg_transparent);
  if (fontav) newStyle.push(bs.font_avenir);
  return newStyle;
}

function getBorderProps(props) {
  const {
    bstyle,
    btransparent,
    bwidth,
    bheight,
    bpadding,
    bradius,
    brow,
    bnowide,
    binrow,
    bunderline,
    bhorzline,
    btopline,
    bborder,
    bborderWidth,
    bbackground,
    bcircle,
    ...borderOtherProps
  } = props;
  return {
    borderProps: {
      bstyle,
      btransparent,
      bwidth,
      bheight,
      bpadding,
      bradius,
      brow,
      bnowide,
      binrow, // eslint-disable-line
      bunderline,
      bhorzline,
      btopline,
      bborder,
      bborderWidth,
      bbackground,
      bcircle // eslint-disable-line
    },
    borderOtherProps
  };
}

function buildBorderStyle(props, basestyle) {
  const {
    bstyle,
    btransparent,
    bwidth,
    bheight,
    bpadding,
    bradius,
    brow,
    bnowide,
    binrow,
    bunderline,
    bhorzline,
    btopline,
    bborder,
    bborderWidth,
    bbackground,
    bcircle
  } = props;
  const newstyle = [basestyle];

  if (bunderline)
    newstyle.push({
      borderBottomWidth: bborderWidth || 0.5,
      borderBottomColor: bunderline,
      borderColor: null,
      borderWidth: null
    }); // eslint-disable-line
  if (bhorzline)
    newstyle.push({
      borderBottomWidth: bborderWidth || 0.5,
      borderTopWidth: bborderWidth || 0.5,
      borderTopColor: bhorzline,
      borderBottomColor: bhorzline,
      borderColor: null,
      borderWidth: null
    }); // eslint-disable-line
  if (btopline)
    newstyle.push({
      borderTopWidth: bborderWidth || 0.5,
      borderTopColor: btopline,
      borderColor: null,
      borderWidth: null
    }); // eslint-disable-line
  if (bborder)
    newstyle.push({
      borderWidth: bborderWidth || 0.5,
      borderColor: bborder,
      borderTopWidth: null,
      borderTopColor: null,
      borderBottomWidth: null,
      borderBottomColor: null
    }); // eslint-disable-line
  if (bbackground) newstyle.push({ backgroundColor: bbackground });

  if (bradius) newstyle.push({ borderRadius: bradius });
  if (bcircle && bheight) newstyle.push({ borderRadius: bheight / 2 });
  if (btransparent) newstyle.push({ backgroundColor: "transparent" });
  if (bpadding) newstyle.push({ paddingHorizontal: bpadding });
  if (brow) newstyle.push({ flexDirection: "row" });
  if (bheight) newstyle.push({ height: bheight });
  if (bwidth) newstyle.push({ width: bwidth });
  else if (!bnowide && !binrow) newstyle.push(bs.self_stretch);
  else if (!bnowide) newstyle.push(bs.flex);

  extendStyle(newstyle, bstyle);

  return newstyle;
}

export {
  extendStyle,
  getBorderProps,
  getTextProps,
  buildTextStyle,
  buildBorderStyle
};
