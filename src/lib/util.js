import firebase from '@firebase/app'
import '@firebase/database'
import '@firebase/auth'
/**
 * isDomAvailable
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */

export function isDomAvailable() {
  return typeof window !== 'undefined' && !!window.document && !!window.document.createElement;
}

const firebaseConfig = {
  apiKey: process.env.GATSBY_FB_API,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DB_URL,
  projectId: process.env.GATSBY_PROJ_ID ,
  storageBucket: process.env.GATSBY_STRG_BUCKET,
  messagingSenderId: process.env.GATSBY_MSG_ID,
  appId: process.env.GATSBY_APP_ID 
};

let firebaseInstance
let currUser = null

export function setUser(user){
 if(isDomAvailable()){
  currUser = user
  firebaseInstance.auth().setPersistence(firebaseInstance.auth.Auth.Persistence.SESSION)
 }else{
   currUser = undefined
 }
}
export function getUser(){
  return currUser
}
// if(isDomAvailable && !firebaseInstance){
//   firebase.initializeApp(firebaseConfig)
//   firebaseInstance = firebase
// }

export function getFirebase(){
  if (typeof window !== 'undefined') {
    if (firebaseInstance) return firebaseInstance;
    firebaseInstance = firebase.initializeApp(firebaseConfig);
    return firebaseInstance;
  }

  return null;
}


// export const auth = firebaseInstance && firebaseInstance.auth;
// export const db = firebaseInstance && firebaseInstance.database();
