import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import store from './redux/store';
import ReduxImagesService from './services/ReduxImagesService';

export const reduxImagesService = new ReduxImagesService(store);

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
