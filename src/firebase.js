import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA_BiK89uFhgASa_GEtBxJF2idux9hNr0",
  authDomain: "admin-dashboard-a7122.firebaseapp.com",
  projectId: "admin-dashboard-a7122",
  storageBucket: "admin-dashboard-a7122.appspot.com",
  messagingSenderId: "601035080983",
  appId: "1:601035080983:web:c5c578cf244c3870c06352"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
