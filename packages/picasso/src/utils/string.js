/* eslint-disable import/prefer-default-export */

export const toCapitalizeCase = str => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
