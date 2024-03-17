import { initializeApp } from "@firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCl5EfZCVcerTM8zssKxl9Bwt78n_yJL7E",
  authDomain: "risaiku-2582d.firebaseapp.com",
  projectId: "risaiku-2582d",
  storageBucket: "risaiku-2582d.appspot.com",
  messagingSenderId: "241605270459",
  appId: "1:241605270459:web:103b1b719610856e2e829e",
  measurementId: "G-935G706B88"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_APP)

export { FIREBASE_APP, FIREBASE_AUTH }