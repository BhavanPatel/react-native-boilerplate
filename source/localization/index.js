import LocalizedStrings from "react-native-localization";
import { en, gu, hi } from "./strings";
const strings = new LocalizedStrings({
  en: en,
  gu: gu,
  hi: hi
});

console.log(strings);

export default strings;
