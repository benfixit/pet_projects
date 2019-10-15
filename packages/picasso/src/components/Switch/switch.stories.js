import React from 'react';
import { storiesOf } from '@storybook/react';
import Switcher from './index';

storiesOf('Switcher', module).add('Switcher', () => <Switcher bg="red" />, {
  notes: 'A simple Switcher component'
});
