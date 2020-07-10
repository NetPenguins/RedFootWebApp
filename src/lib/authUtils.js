import { getFirebase } from "./util";

export function signup(email, password) {
  return getFirebase().auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return getFirebase().auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new getFirebase().auth.GoogleAuthProvider();
  return getFirebase().auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new getFirebase().auth.GithubAuthProvider();
  return getFirebase().auth().signInWithPopup(provider);
}

export function logout() {
  return getFirebase().auth().signOut();
}