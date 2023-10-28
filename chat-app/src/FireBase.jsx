// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA20ZDHnmcZ9Nk-bGZY9oa49vkrfzuJLOI",
  authDomain: "chat-app-1956b.firebaseapp.com",
  projectId: "chat-app-1956b",
  storageBucket: "chat-app-1956b.appspot.com",
  messagingSenderId: "1057516949407",
  appId: "1:1057516949407:web:48da5d24e70021a55db7aa",
  measurementId: "G-C8MXZGYL3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
