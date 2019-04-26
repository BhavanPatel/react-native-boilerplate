import * as types from "../constants/theme.const";
import { themes } from "../../theme";
let DEFAULT_THEME = themes[0];

export default function theme(state = DEFAULT_THEME, action) {
  switch (action.type) {
    case types.SET_THEME:
      return action.state;
    default:
      return state;
  }
}
