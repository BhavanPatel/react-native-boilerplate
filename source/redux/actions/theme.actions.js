import * as types from "../constants/theme.const";

export const setTheme = state => {
  return {
    type: types.SET_THEME,
    state
  };
};
