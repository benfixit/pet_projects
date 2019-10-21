import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton, { RadioButtonArray } from './index';

storiesOf('RadioButton', module).add(
  'RadioButtonArray',
  () => (
    <RadioButtonArray
      defaultValue={{
        togo: false,
        paraguay: true,
        uruguay: false
      }}
    >
      <RadioButton name="togo" label="Togo" />
      <RadioButton name="paraguay" label="Paraguay" />
      <RadioButton name="uruguay" label="Uruguay" />
    </RadioButtonArray>
  ),
  { notes: 'RadioButton Array' }
);
