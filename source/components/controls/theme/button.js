import { bs, sizes } from "../../../theme";

const buttons = {};

buttons["btn.common"] = {
  button: {
    ...bs.self_stretch,
    ...bs.center,
    height: sizes.em(50),
    backgroundColor: "#181818"
  },
  border: {
    ...bs.absolute_full,
    top: sizes.em(50) / 2,
    backgroundColor: "#000"
  },
  text: {
    ...bs.font_avenir,
    ...bs.text_heavy,
    ...bs.text_italic,
    ...bs.bg_transparent,
    fontSize: sizes.em(14, null, false),
    color: "#fff"
  }
};
buttons["btn.common.icon"] = {
  border: {
    ...bs.center,
    ...bs.absolute,
    ...bs.bg_transparent,
    right: sizes.pad1 * 2,
    top: 0,
    bottom: 0
  }
};

export default buttons;
