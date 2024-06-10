import { atom, useRecoilState } from "recoil";

export const $Current_Width = atom({
  key: "$Current_Width",
  default: window.innerWidth,
});
  export const  Loged= atom({
    key:"loged",
    default:false,
  })
 

  export const userState = atom({
    key: 'userState',
    default: { loggedIn: false, username: '' }
  });

  export const loggedInState = atom({
    key: 'loggedInState',
    default: false,
  });
  export const usernameState = atom({
    key: 'usernameState',
    default: '', // Initially, username is empty
  });
  
  // atoms.js
  export const emailState = atom({
    key: 'emailState',
    default: '',
  });