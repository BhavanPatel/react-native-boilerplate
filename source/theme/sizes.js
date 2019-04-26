import dim from "./dimension";

const pdph = 1.5;

function em(ph, pd = null, floor = true) {
  var res =
    (dim.is_phone ? ph : (pd === 0 || pd ? pd : null) || ph * pdph) * dim.rate;
  if (floor) res = Math.floor(res);
  return res;
}
function em1(ph, pd = null, floor = true) {
  var res =
    (dim.is_phone ? ph : (pd === 0 || pd ? pd : null) || ph * pdph) * dim.rate1;
  if (floor) res = Math.floor(res);
  return res;
}

const sizes = {
  ...dim,
  is_portrait: true,
  is_landscape: false,
  em,
  em1,

  screen: {
    width: dim.screenWidth,
    height: dim.screenHeight
  },

  pad: em(8),
  pad1: em(5),
  statusbar: dim.is_ios ? (dim.is_iphonex ? 0 : 20) : 0, // eslint-disable-line
  navbar: em(44),

  h_20: em(20),
  h_24: em(24),
  h_30: em(30),
  h_32: em(32),
  h_36: em(36),
  h_40: em(40),
  h_50: em(50),
  h_54: em(54),
  h_60: em(60),
  h_70: em(70),
  h_80: em(80),
  h_120: em(120),
  h_150: em(150),
  h_button: em(50),

  main_navbar: em(44),
  main_tabbar: em(44),
  main_thumb: em(180),
  main_list_btm: em(230),
  w_main_cat: em(290, 500)
};

export default sizes;
