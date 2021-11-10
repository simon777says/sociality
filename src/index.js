import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

ReactDOM.render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


// dispatch оператор для всіх логічних функцій в state розрізняє він їх через type'...'


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//пропси
// state={state}
//dispatch={store.dispatch.bind(store)}