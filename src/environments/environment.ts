// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
  apiKey: "AIzaSyDdftumHH2ah5hVmGcY5Ox3S3-XSPjxIWA",
  authDomain: "airbnb-94930.firebaseapp.com",
  databaseURL: "https://airbnb-94930-default-rtdb.firebaseio.com",
  projectId: "airbnb-94930",
  storageBucket: "airbnb-94930.appspot.com",
  messagingSenderId: "532049751506",
  appId: "1:532049751506:web:31ac146d3d3d58a2ee6c0b",
  measurementId: "G-1WRT1TBHYT"
},

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


