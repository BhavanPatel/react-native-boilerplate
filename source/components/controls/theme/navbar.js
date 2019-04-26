import { bs, sizes, colors } from "../../../theme";

export default {
  navbar: {
    border: {
      ...bs.p_status,
      ...bs.center,
      height: sizes.statusbar + sizes.navbar,
      backgroundColor: colors.white
    },
    text: {
      ...bs.font_normal,
      ...bs.text_heavy,
      ...bs.text_italic,
      ...bs.bg_transparent,
      fontSize: sizes.em(17, null, false),
      color: colors.black
    }
  },

  "navbar.left": {
    button: {
      ...bs.absolute,
      ...bs.center,
      ...bs.ph_2x,
      height: sizes.navbar,
      top: sizes.statusbar,
      left: sizes.pad1
    }
  },
  "navbar.right": {
    button: {
      ...bs.absolute,
      ...bs.center,
      ...bs.ph_2x,
      height: sizes.navbar,
      top: sizes.statusbar,
      right: sizes.pad1
    }
  },

  "btn.navback": {
    button: {
      ...bs.absolute,
      ...bs.center,
      width: sizes.navbar,
      height: sizes.navbar,
      top: sizes.statusbar,
      left: sizes.pad1
    }
  },
  "btn.navright": {
    button: {
      ...bs.absolute,
      ...bs.center,
      ...bs.ph_2x,
      height: sizes.navbar,
      top: sizes.statusbar,
      right: sizes.pad1
    }
  }
};
