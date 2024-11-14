import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { Categories } from './components';

import './App.css';

function App() {
  return (
    <Provider store={store} className="App">
      <Categories />
    </Provider>
  );
}

export default App;
