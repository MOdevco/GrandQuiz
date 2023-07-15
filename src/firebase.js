import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAJWFsj2g2boQbMT6rVL9lQ2JcZSycYkLM",
  authDomain: "quiz-bbaca.firebaseapp.com",
  projectId: "quiz-bbaca",
  storageBucket: "quiz-bbaca.appspot.com",
  messagingSenderId: "1045701850452",
  appId: "1:1045701850452:web:5aa252370f2d2e2aec04c1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)