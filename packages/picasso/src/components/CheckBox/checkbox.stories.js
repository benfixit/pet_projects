import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox, { CheckBoxArray } from './index';

storiesOf('CheckBox', module)
  .add('CheckBox', () => <CheckBox name="Test" label="Test" />)
  .add(
    'CheckBoxArray',
    () => (
      <CheckBoxArray
        defaultValue={{ togo: true, paraguay: false, uruguay: false }}
      >
        <CheckBox name="togo" label="Togo" />
        <CheckBox name="paraguay" label="Paraguay" />
        <CheckBox name="uruguay" label="Uruguay" />
      </CheckBoxArray>
    ),
    { notes: 'CheckBox Array' }
  );
