import { combineReducers } from "redux";
import theme from "./theme.reducer";
import language from "./language.reducer";

export default combineReducers({
  theme,
  language
});
