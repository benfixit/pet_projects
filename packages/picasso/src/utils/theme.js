/* eslint-disable import/prefer-default-export */

export const themeGet = path => props => {
  return path.split('.').reduce((acc, item) => {
    return acc && acc[item] ? acc[item] : null;
  }, props.theme);
};
