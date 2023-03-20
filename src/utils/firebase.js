// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHm7MBadjjga9XrUIzdYdr2ii7OlcfHW0",
  authDomain: "prophegos-music-app.firebaseapp.com",
  projectId: "prophegos-music-app",
  storageBucket: "prophegos-music-app.appspot.com",
  messagingSenderId: "373081040277",
  appId: "1:373081040277:web:27c11969de20a298bfc29c",
  measurementId: "G-YW1RY8VTXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
