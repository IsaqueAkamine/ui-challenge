import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBU4HioA6aRZHpL3dU8-8LOijcVpI-Oce4",
//   authDomain: "ui-challenge-interface.firebaseapp.com",
//   projectId: "ui-challenge-interface",
//   storageBucket: "ui-challenge-interface.appspot.com",
//   messagingSenderId: "628678156982",
//   appId: "1:628678156982:web:2addddd4166196122b7c17",
//   measurementId: "G-DFJS6QWG6R"
// };

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ui-challenge-interface.firebaseapp.com",
  projectId: "ui-challenge-interface",
  storageBucket: "ui-challenge-interface.appspot.com",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIRABSE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
