import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import musicsReducer from './redux/musicState'
import musicSaga from './redux/musicSaga.js';
import App from './App';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    musics: musicsReducer
  },
  middleware: [saga]
});

saga.run(musicSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
);


