import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTCHzT6AU_6D4X-LSyHiRsEm57lO65nEw",
  authDomain: "challenge-e2174.firebaseapp.com",
  projectId: "challenge-e2174",
  storageBucket: "challenge-e2174.appspot.com",
  messagingSenderId: "902004172656",
  appId: "1:902004172656:web:822b05e663d60f111951b5"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
