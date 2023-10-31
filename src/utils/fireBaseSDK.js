// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsenCTYps8w6y1rXTuZX9aVo2f-LZW2T0",
  authDomain: "fitforms-ce853.firebaseapp.com",
  projectId: "fitforms-ce853",
  storageBucket: "fitforms-ce853.appspot.com",
  messagingSenderId: "857179052171",
  appId: "1:857179052171:web:a85e66eb71b41ef2e15c8e",
  measurementId: "G-QZEV9F7GBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
