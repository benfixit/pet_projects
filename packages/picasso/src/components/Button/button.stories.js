import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
  .add(
    'With Text',
    () => {
      return <Button onClick={action('clicked')}>Hello World</Button>;
    },
    { notes: 'A very simple button component' }
  )
  .add(
    'With Emoji',
    () => {
      return (
        <Button onClick={action('clicked')}>
          <span role="img" aria-label="so cool">
            😀 😎 👍 💯
          </span>
        </Button>
      );
    },
    {
      notes: 'A button with Emoji'
    }
  );
