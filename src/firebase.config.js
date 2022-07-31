import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNX8i0b98nSeOYXSJTl7eGqYSw-pKC8uA",
    authDomain: "food-delivery-app-622d7.firebaseapp.com",
    databaseURL: "https://food-delivery-app-622d7-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-622d7",
    storageBucket: "food-delivery-app-622d7.appspot.com",
    messagingSenderId: "527509039089",
    appId: "1:527509039089:web:5d97debd4b4d714b80c650"
  };

//   we need to initialize app only when there is no app otherwise it will initialize every single time whenever our page gets refreshed
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };