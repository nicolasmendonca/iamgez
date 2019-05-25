import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CounterContainer from './containers/Counter.container';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
