import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrMyBeFice1XfIG_x51whI1y5UJMHFibc",
  authDomain: "ticket-resale-app-c43ef.firebaseapp.com",
  databaseURL: "https://ticket-resale-app-c43ef-default-rtdb.firebaseio.com",
  projectId: "ticket-resale-app-c43ef",
  storageBucket: "ticket-resale-app-c43ef.appspot.com",
  messagingSenderId: "795131025325",
  appId: "1:795131025325:web:251aa63a05de8e67d13324",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
