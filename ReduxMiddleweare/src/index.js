import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules'

const store=createStore(rootReducer)

//Provider 로 리액트 프로젝트에 리덕스 적용
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
  document.getElementById('root')
);


