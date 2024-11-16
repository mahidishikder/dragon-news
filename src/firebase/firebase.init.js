
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm3Bsz2PxU5NCSoMmF2KKs0iyiYaDTX5Q",
  authDomain: "dragon-news-24cbe.firebaseapp.com",
  projectId: "dragon-news-24cbe",
  storageBucket: "dragon-news-24cbe.firebasestorage.app",
  messagingSenderId: "195536574204",
  appId: "1:195536574204:web:1a6d872b1c1b086a6be979"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;