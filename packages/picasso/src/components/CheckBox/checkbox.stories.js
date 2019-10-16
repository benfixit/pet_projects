import React from 'react';
import { storiesOf } from '@storybook/react';
import { SetValue } from 'react-values';
import CheckBox from './index';
import Flex from '../Flex';

const countries = [
  'brazil',
  'nigeria',
  'togo',
  'cameroon',
  'paraguay',
  'russia'
];

storiesOf('CheckBox', module)
  .add('CheckBox', () => <CheckBox />)
  .add('CheckBoxArray', () => (
    <SetValue defaultValue={new Set(['nigeria', 'togo', 'cameroon'])}>
      {({ value, add, remove }) => (
        <Flex>
          {countries.map(item => {
            return (
              <CheckBox
                key={item}
                value={item}
                name={item}
                checked={value.has(item)}
                onChange={event => {
                  return event.target.checked ? add(item) : remove(item);
                }}
              />
            );
          })}
          <ul>
            {Array.from(value).map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Flex>
      )}
    </SetValue>
  ));
