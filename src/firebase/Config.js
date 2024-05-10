import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-Qcbha8XSBeWWaDoMUwEdXyTpYQNN9LQ",
  authDomain: "crud-basic-671a6.firebaseapp.com",
  projectId: "crud-basic-671a6",
  storageBucket: "crud-basic-671a6.appspot.com",
  messagingSenderId: "716470225564",
  appId: "1:716470225564:web:56bf474b103f4451dc3b59"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);