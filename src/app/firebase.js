// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {getFirestore  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLGrIMGUhCNzcg8GFWOCSurGkT46BjXwo",
  authDomain: "fir-app-tuto-8fc41.firebaseapp.com",
  projectId: "fir-app-tuto-8fc41",
  storageBucket: "fir-app-tuto-8fc41.appspot.com",
  messagingSenderId: "516611561998",
  appId: "1:516611561998:web:974e7572e644dd7a077a5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);