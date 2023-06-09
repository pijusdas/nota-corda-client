// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyP-dxWgHPY6_zhQuEC6O-4dSYKApCoxc",
  authDomain: "nota-corda.firebaseapp.com",
  projectId: "nota-corda",
  storageBucket: "nota-corda.appspot.com",
  messagingSenderId: "855900190874",
  appId: "1:855900190874:web:54239141f48e017a148723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app