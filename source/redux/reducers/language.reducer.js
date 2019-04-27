import * as types from "../constants/language.const";
import { DEFAULT_LANGUAGE } from "../../app/config";

export default function language(state = DEFAULT_LANGUAGE, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return action.state;
    default:
      return state;
  }
}
