// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import CONST from "../Utils/constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: CONST.FIREBASE_KEY,
  authDomain: CONST.FIREBASE_DOMAIN,
  projectId: CONST.FIREBASE_PROJECT_ID,
  storageBucket: CONST.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: CONST.FIREBASE_MESSAGING,
  appId: CONST.FIREBASE_APP_ID,
  measurementId: CONST.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
