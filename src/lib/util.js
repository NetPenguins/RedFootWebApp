/**
 * isDomAvailable
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */

export function isDomAvailable() {
  return typeof window !== 'undefined' && !!window.document && !!window.document.createElement;
}

export var firebaseConfig = {
  apiKey: "AIzaSyBnXj0CmCIAvbLlZFejIu7n7gFIuFghk80",
  authDomain: "apexalertengine.firebaseapp.com",
  databaseURL: "https://apexalertengine.firebaseio.com",
  projectId: "apexalertengine",
  storageBucket: "apexalertengine.appspot.com",
  messagingSenderId: "911972698521",
  appId: "1:911972698521:web:dc7a0d8f08a88c2f"
};