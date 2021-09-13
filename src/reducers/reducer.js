
const initialState = {
    userInfo:{
      ID : 'anonymous'
      ,name:''
    },
    ans1:'0',
    ans2:'0',
    ans3:'0',
    ans4:'0'
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        userInfo:action.userInfo
      };
    case 'ans1':
      return {
        ...state,
        ans1:action.ans
      };
    case 'ans2':
      return {
        ...state,
        ans2:action.ans
      };
    case 'ans3':
      return {
        ...state,
        ans3:action.ans
      };
    case 'ans4':
      return {
        ...state,
        ans4:action.ans
      };
    default:
      return state;
  }
}
// const mainReducer = (state=StoreState, setStoreState) => {
//     if(setStoreState.type==='login'){
//       return {...state, userInfo:setStoreState.userInfo};
//     }
//     if(setStoreState.type==='ans1'){
//       return {...state, ans1:setStoreState.ans};
//     }
//     if(setStoreState.type==='ans2'){
//       return {...state, ans2:setStoreState.ans};
//     }
//     if(setStoreState.type==='ans3'){
//       return {...state, ans3:setStoreState.ans};
//     }
//     if(setStoreState.type==='ans4'){
//       return {...state, ans4:setStoreState.ans};
//     }
// }

// export default mainReducer;