// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV5Z8LrJjfnsVgSsTnH_3YOGvBMphb16A",
  authDomain: "freshharvests-8b155.firebaseapp.com",
  projectId: "freshharvests-8b155",
  storageBucket: "freshharvests-8b155.firebasestorage.app",
  messagingSenderId: "115603423266",
  appId: "1:115603423266:web:52f32709e8b8ab62b84a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth