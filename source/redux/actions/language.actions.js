import * as types from "../constants/language.const";

export const setLanguage = state => {
  return {
    type: types.SET_LANGUAGE,
    state
  };
};
