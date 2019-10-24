import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import DivGroup from '../DivGroup';
import Label from '../Label';

storiesOf('Input', module).add(
  'Input',
  () => {
    return (
      <DivGroup width="300px">
        <Label>Name</Label>
        <Input name="test_input" placeholder="Enter your name" />
      </DivGroup>
    );
  },
  {
    notes: 'Input Element'
  }
);
