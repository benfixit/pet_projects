import React from 'react';
import { Provider } from 'mobx-react';
import store from './store'
import WeightList from './components/WeightList';

function App() {
  return (
    <Provider weightStore={store}>
      <WeightList />
    </Provider>
  );
}

export default App;
