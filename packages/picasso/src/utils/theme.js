/* eslint-disable import/prefer-default-export */
import theme from '../theme';

export const themeGet = path => {
  return path.split('.').reduce((acc, item) => {
    return acc && acc[item] ? acc[item] : null;
  }, theme);
};
