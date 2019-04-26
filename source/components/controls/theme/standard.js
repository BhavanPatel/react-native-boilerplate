import { bs, colors } from "../../../theme";

export default {
  // border styles
  border: {
    ...bs.center
  },
  button: {
    ...bs.center
  },

  // edit styles
  edit: {
    ...bs.font_normal,
    ...bs.text_normal,
    ...bs.match_parent,
    color: colors.white
  },
  "edit.border": {
    ...bs.center
  },
  "edit.placeholder": "#A6A599",

  avatar: {},
  icon: {},
  text: {
    ...bs.font_normal,
    ...bs.text_normal,
    color: colors.white
  },

  // scroll styles
  scroll: {
    ...bs.match_parent
  },
  "scroll.container": {
    flexGrow: 1
  },
  "scroll.content": {
    ...bs.match_parent,
    ...bs.start_center
  }
};
