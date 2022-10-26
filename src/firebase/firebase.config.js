// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAT4OBfKEyOl8bkbKKOpp-Pr8CQKbPVSxY",
  // authDomain: "education-with-excellence.firebaseapp.com",
  // projectId: "education-with-excellence",
  // storageBucket: "education-with-excellence.appspot.com",
  // messagingSenderId: "979165491514",
  // appId: "web:c29f8f4de27bcf997fe003"


  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId, 
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;