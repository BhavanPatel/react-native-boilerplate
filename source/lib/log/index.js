import { colors } from "../../theme";
class log {}

/**
 *  Generate success log
 */
log.success = (msg, data) => {
  if (msg && data !== undefined) {
    console.log(
      `%c ${msg}`,
      `background:${colors.success};color:${colors.black}`,
      data
    );
  } else {
    console.log(msg);
  }
};

/**
 *  Generate error log
 */
log.error = (msg, data) => {
  if (msg && data !== undefined) {
    console.log(
      `%c ${msg}`,
      `background:${colors.error};color:${colors.black}`,
      data
    );
  } else {
    console.log(msg);
  }
};

/**
 *  Generate warning log
 */
log.warn = (msg, data) => {
  if (msg && data !== undefined) {
    console.log(
      `%c ${msg}`,
      `background:${colors.warn};color:${colors.black}`,
      data
    );
  } else {
    console.log(msg);
  }
};

/**
 *  Generate info log
 */
log.info = (msg, data) => {
  if (msg && data !== undefined) {
    console.log(
      `%c ${msg}`,
      `background:${colors.info};color:${colors.black}`,
      data
    );
  } else {
    console.log(msg);
  }
};

export default log;
