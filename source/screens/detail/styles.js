import { bs, sizes } from "../../theme";

const styles = {
  header: {
    zIndex: 100
  },
  container: {
    ...bs.match_parent,
    ...bs.start_center,
    ...bs.pt_4x
  },
  setting_list: {
    ...bs.flex_row,
    ...bs.between_center,
    ...bs.full_width
  },
  icon: {
    height: sizes.em(50),
    width: sizes.em(50)
  }
};
export default styles;
