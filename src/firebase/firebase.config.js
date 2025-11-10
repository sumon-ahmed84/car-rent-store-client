
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBu1sF-0p2hFrG2H8wMKCJxBwiyBLS-mCs",
  authDomain: "car-rental-36aa1.firebaseapp.com",
  projectId: "car-rental-36aa1",
  storageBucket: "car-rental-36aa1.firebasestorage.app",
  messagingSenderId: "1007328309839",
  appId: "1:1007328309839:web:eba04f2d7b169d42e4303a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);





















// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey, 
//   authDomain:import.meta.env.VITE_authDomain, 
//   projectId:import.meta.env.VITE_projectId, 
//   storageBucket:import.meta.env.VITE_storageBucket, 
//   messagingSenderId:import.meta.env.VITE_messagingSenderId, 
//   appId:import.meta.env.VITE_appId, 
// };

// export const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { auth, googleProvider };
