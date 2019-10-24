import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './index';

storiesOf('ProgressBar', module).add('ProgressBar', () => <ProgressBar />, {
  notes: 'Progress Bar'
});
