import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key:"root",
    storage,
  };
  
  let StoreState = {
    userInfo:{
      ID : 'anonymous'
      ,name:''
    },
    ans1:'0',
    ans2:'0',
    ans3:'0',
    ans4:'0',
  }
  
  const reducer = (state=StoreState, setStoreState) => {
    if(setStoreState.type==='login'){
      return {...state, userInfo:setStoreState.userInfo};
    }
    if(setStoreState.type==='ans1'){
      return {...state, ans1:setStoreState.ans};
    }
    if(setStoreState.type==='ans2'){
      return {...state, ans2:setStoreState.ans};
    }
    if(setStoreState.type==='ans3'){
      return {...state, ans3:setStoreState.ans};
    }
    if(setStoreState.type==='ans4'){
      return {...state, ans4:setStoreState.ans};
    }
    
  }
const persistedReducer = persistReducer(persistConfig,reducer);
export default persistedReducer;