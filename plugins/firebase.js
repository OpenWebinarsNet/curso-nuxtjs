import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBgzHZN82vUfvVQZ5Wc9mqdbMRWhkaioTw",
    authDomain: "foodadvisor02.firebaseapp.com",
    databaseURL: "https://foodadvisor02.firebaseio.com",
    projectId: "foodadvisor02",
    storageBucket: "foodadvisor02.appspot.com",
    messagingSenderId: "822629886539",
    appId: "1:822629886539:web:0cbf9a4643985ee91bfbce"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }