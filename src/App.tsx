import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
