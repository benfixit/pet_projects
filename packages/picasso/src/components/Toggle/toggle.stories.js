import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './index';

storiesOf('Toggle', module)
  .add(
    'Toggle With default bg color',
    () => <Toggle value onClick={() => {}} />,
    {
      notes: 'A simple Toggle component'
    }
  )
  .add('Toggle with custom bg color', () => <Toggle bg="red" />, {
    notes: 'A simple Toggle component'
  });
