const forInitial = props => {
  const { navigation, scene } = props;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{ translateX: translate }, { translateY: translate }]
  };
};

const getForHorizontal = inverse => {
  return props => {
    const { layout, position, scene } = props;

    if (!layout.isMeasured) {
      return forInitial(props);
    }

    const index = scene.index;
    const inputRange = [index - 1, index, index + 1];

    const width = layout.initWidth;
    const outputRange = inverse ? [-width, 0, 10] : [width, 0, -10];

    // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
    // This makes the screen's shadow to disappear smoothly.
    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
      outputRange: [0, 1, 1, 0.3, 0]
    });

    const translateY = 0;
    const translateX = position.interpolate({
      inputRange,
      outputRange
    });

    return {
      opacity,
      transform: [{ translateX }, { translateY }]
    };
  };
};

const getForVertical = inverse => {
  return props => {
    const { layout, position, scene } = props;

    if (!layout.isMeasured) {
      return forInitial(props);
    }

    const index = scene.index;
    const inputRange = [index - 1, index, index + 1];

    const height = layout.initHeight;
    const outputRange = inverse ? [-height, 0, 10] : [height, 0, -10];

    // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
    // This makes the screen's shadow to disappear smoothly.
    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
      outputRange: [0, 1, 1, 0.3, 0]
    });

    const translateX = 0;
    const translateY = position.interpolate({
      inputRange,
      outputRange
    });

    return {
      opacity,
      transform: [{ translateX }, { translateY }]
    };
  };
};

const getForFade = () => {
  return props => {
    const { layout, position, scene } = props;

    if (!layout.isMeasured) {
      return forInitial(props);
    }

    const index = scene.index;

    // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
    // This makes the screen's shadow to disappear smoothly.
    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
      outputRange: [0, 1, 1, 1, 1]
    });

    return {
      opacity
    };
  };
};

const interpolators = {
  forHorizontal: getForHorizontal(false),
  forHorizontalInverse: getForHorizontal(true),
  forVerticalInverse: getForVertical(true),
  forVertical: getForVertical(false),
  forFade: getForFade()
};

export default interpolators;
