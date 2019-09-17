import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
    .add('with primary', () => <Button label='Primary Button' onClick={action('click')} />)
    .add('with warning', () => <Button 
        label='Warning Button' 
        type={'warning'} 
        onClick={action('click')} 
        style={{color: 'black'}}    
        />)
    .add('with outline', () => <Button 
        label='Outline Button' 
        onClick={action('click')}
        style={{ background: 'transparent', color: 'black', border: '3px solid #fecd43'}}
    />)
    .add('with rounded corners', () => <Button 
        label='Rounded Button'
        type='danger'
        onClick={action('click')}
        style={{ borderRadius: '15px'}}
    />)
    .add('disabled', () => <Button 
        label='Disabled Button' 
        onClick={action('click')}
        style={{ background: 'gray', border: 'gray', cursor: 'not-allowed' }}
    />)