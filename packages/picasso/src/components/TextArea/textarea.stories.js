import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './index';
import DivGroup from '../DivGroup';
import Label from '../Label';

storiesOf('TextArea', module).add(
  'TextArea',
  () => {
    return (
      <DivGroup width="300px">
        <Label>Description</Label>
        <TextArea
          name="test_text_area"
          placeholder="Enter description"
          defaultValue="This is a test!"
        />
      </DivGroup>
    );
  },
  {
    notes: 'TextArea Element'
  }
);
