import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbVewNOyAM4bkjGlSOeQR-VrDfJGHN-GE",
  authDomain: "admin-dashboard-17a22.firebaseapp.com",
  projectId: "admin-dashboard-17a22",
  storageBucket: "admin-dashboard-17a22.appspot.com",
  messagingSenderId: "503961686598",
  appId: "1:503961686598:web:18bf0c0e9ffeca070ff047"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
