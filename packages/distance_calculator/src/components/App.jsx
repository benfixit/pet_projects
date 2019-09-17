import React from 'react'
import Picasso from '@benfixit/picasso'

const { Button } = Picasso;

const App = props => {
    return (
        <div>
            <h1>Welcome Home, Picasso</h1>
            <Button type='danger' label='Danger Button' />
        </div>
    )
}

export default App;