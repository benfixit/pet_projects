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
      <RadioButton name="country" label="Togo" />
      <RadioButton name="country" label="Paraguay" />
      <RadioButton name="country" label="Uruguay" />
    </RadioButtonArray>
  ),
  { notes: 'RadioButton Array' }
);
