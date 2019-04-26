import _ from 'lodash';
import standard from './standard';
import navbar from './navbar';
import button from './button';

const themeCollections = [
  { std: standard, standard },
  navbar, button,
];
const themes = {};

_.each(themeCollections, (collection) => {
  _.each(collection, (t, k) => {
    themes[k] = t;
  });
});

function style(name) {
  return this[name] || standard[name];
}

function getTheme(type) {
  const theme = themes[type] || standard;
  theme.style = style.bind(theme);
  return theme;
}

export {
  getTheme,
};