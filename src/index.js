import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './assets/css/index.css';
import App from './App';
import Login from './login';
import LogList from './logList';
import AdminList from './adminList';
import TopNav from './partials/topNav';
import reportWebVitals from './reportWebVitals';


let StoreState = [
  {
    id : 'anonymous'
    ,name:''
    ,phone : ''
  }
]

const reducer = (state=StoreState, setStoreState) => {
  if(setStoreState.type==='login'){
    let copy = [...state];
    copy[0] = setStoreState.userInfo;
    // console.log(copy);
    return copy;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/check">
          <TopNav />
          <App />
        </Route>
        <Route path="/list">
          <TopNav />
          <LogList />
        </Route>
        <Route path="/adminlist">
          <TopNav />
          <AdminList />
        </Route>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
