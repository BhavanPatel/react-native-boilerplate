import { bs, sizes } from "../../theme";

const styles = {
  header: {
    zIndex: 100
  },
  loader: {
    ...bs.flex,
    ...bs.match_parent,
    ...bs.center
  },
  container: {
    ...bs.match_parent,
    ...bs.start_center,
    ...bs.p_4x
  },
  card: {
    ...bs.mt_4x,
    ...bs.center,
    height: sizes.em(180)
  },
  button: {
    ...bs.between_center,
    ...bs.full_width
  }
};

export default styles;
