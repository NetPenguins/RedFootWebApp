import config from "../../config"
import firebase from 'firebase'
import 'firebase/database'
/**
 * isDomAvailable
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */

export function isDomAvailable() {
  return typeof window !== 'undefined' && !!window.document && !!window.document.createElement;
}

const firebaseConfig = {
  apiKey: process.env.FB_API || config.FB_API,
  authDomain: process.env.AUTH_DOMAIN || config.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL || config.DB_URL,
  projectId: process.env.PROJ_ID || config.PROJ_ID,
  storageBucket: process.env.STRG_BUCKET || config.STRG_BUCKET,
  messagingSenderId: process.env.MSG_ID || config.MSG_ID,
  appId: process.env.APP_ID || config.APP_ID
};

let firebaseInstance
let currUser = null

export function setUser(user){
 currUser = user
 firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}
export function getUser(){
  return currUser
}
if(isDomAvailable && !firebaseInstance){
  firebase.initializeApp(firebaseConfig)
  firebaseInstance = firebase
}

export function getFirebase(){
  if(firebaseInstance)
    return firebaseInstance
}

export const auth = firebase ? firebase.auth : null;
export const db = firebase ? firebase.database() : null;
