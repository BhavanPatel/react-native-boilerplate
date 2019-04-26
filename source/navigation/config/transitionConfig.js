import { NavigationInterpolator } from "./Interpolator";

/* eslint-disable*/
const horizontal = props => NavigationInterpolator.forHorizontal(props);
const horizontalInv = props =>
  NavigationInterpolator.forHorizontalInverse(props);
const vertical = props => NavigationInterpolator.forVertical(props);
const verticalInv = props => NavigationInterpolator.forVerticalInverse(props);
const fade = props => NavigationInterpolator.forFade(props);
/* eslint-enable*/

export const transitionCustomConfig = props => {
  const { scene } = props;
  switch (scene.route.routeName) {
    case "detail":
      // return horizontal(props);
      // return horizontalInv(props);
      // return vertical(props);
      // return verticalInv(props);
      // return fade(props);
      return horizontal(props);
    default:
      return horizontal(props);
  }
};
