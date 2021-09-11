import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './assets/css/index.css';
import App from './App';
import Login from './login';
import SurveyInfo from './surveyInfo';
import Question from './question';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import TopNav from './partials/topNav';
import reportWebVitals from './reportWebVitals';


let StoreState = [
  {
    id : 'anonymous'
    ,name:''
    ,ans1 : ''
    ,ans2 : ''
    ,ans3 : ''
    ,ans4 : ''
  }
]

const reducer = (state=StoreState, setStoreState) => {
  if(setStoreState.type==='login'){
    let copy = [...state];
    copy[0] = setStoreState.userInfo;
    return copy;
  }
  if(setStoreState.type==='ans1'){
    let copy = [...state];
    copy[0].ans1 = setStoreState.ans;
    return copy;
  }
  if(setStoreState.type==='ans2'){
    let copy = [...state];
    copy[0].ans2 = setStoreState.ans;
    return copy;
  }
  if(setStoreState.type==='ans3'){
    let copy = [...state];
    copy[0].ans3 = setStoreState.ans;
    return copy;
  }
  if(setStoreState.type==='ans4'){
    let copy = [...state];
    copy[0].ans4 = setStoreState.ans;
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
        <Route path="/surveyinfo">
          <TopNav />
          <SurveyInfo />
        </Route>
        <Route path="/question">
          <TopNav />
          <Question />
        </Route>
        <Route path="/question2">
          <TopNav />
          <Question2 />
        </Route>
        <Route path="/question3">
          <TopNav />
          <Question3 />
        </Route>
        <Route path="/question4">
          <TopNav />
          <Question4 />
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
