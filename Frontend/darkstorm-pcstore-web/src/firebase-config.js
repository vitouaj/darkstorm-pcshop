import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtzvOiaZ8CS_6aHeGMZY-zgMhRxDN80gE",
  authDomain: "darkstormpc-a4fa9.firebaseapp.com",
  databaseURL: "https://darkstormpc-a4fa9-default-rtdb.firebaseio.com",
  projectId: "darkstormpc-a4fa9",
  storageBucket: "darkstormpc-a4fa9.appspot.com",
  messagingSenderId: "280337193001",
  appId: "1:280337193001:web:2c04f5b4a99ce7dfe6a438",
  measurementId: "G-1HMFFNPNZ1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
