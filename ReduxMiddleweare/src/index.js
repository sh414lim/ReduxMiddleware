import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules'
// import loggeriddleware from './lib/Middleware';
import logger, {createLogger} from "redux-logger"
import ReduxThunk  from "redux-thunk";


const store=createStore(rootReducer,applyMiddleware(logger,ReduxThunk)); //미들웨어는 스토어를 생성하는 과정에서 적용

//Provider 로 리액트 프로젝트에 리덕스 적용
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
  document.getElementById('root')
);


