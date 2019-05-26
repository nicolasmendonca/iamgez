import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import store from './redux/store';
import ReduxImagesService from './services/ReduxImagesService';
import { defaultTheme } from './styled-components';

export const reduxImagesService = new ReduxImagesService(store);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
