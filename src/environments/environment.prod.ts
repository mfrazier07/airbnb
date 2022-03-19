export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdftumHH2ah5hVmGcY5Ox3S3-XSPjxIWA",
  authDomain: "airbnb-94930.firebaseapp.com",
  databaseURL: "https://airbnb-94930-default-rtdb.firebaseio.com",
  projectId: "airbnb-94930",
  storageBucket: "airbnb-94930.appspot.com",
  messagingSenderId: "532049751506",
  appId: "1:532049751506:web:31ac146d3d3d58a2ee6c0b",
  measurementId: "G-1WRT1TBHYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);