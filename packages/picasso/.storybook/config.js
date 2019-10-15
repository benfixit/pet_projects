import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
// const req = require.context('../src/components', true, /\.stories.js$/);

// function loadStories(){
//     req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);
