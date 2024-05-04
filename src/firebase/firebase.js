// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, push, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Y8_9h7zBMjsdzYYde9mvbb-1uKpnCcE",
  authDomain: "expensify-61e15.firebaseapp.com",
  databaseURL: "https://expensify-61e15-default-rtdb.firebaseio.com",
  projectId: "expensify-61e15",
  storageBucket: "expensify-61e15.appspot.com",
  messagingSenderId: "1060861393915",
  appId: "1:1060861393915:web:91f79768f1a597f52a695e",
  measurementId: "G-KKLVJM7T1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {firebaseConfig, database as default};



set(ref(database, ), {
    name: 'MAN Yoon',
    age: 21,
    isSingle: true,
    location: {
        city: 'Toronto',
        country: 'Canada'
    }
}).then(() => {
    console.log("Data is Saved");
}).catch((e) => {
    console.log('Failed: ', e);
})




push(ref(database), {
    name: 'Darnell',
    age: 26,
    isSingle: true,
    location: {
        city: 'Toronto',
        country: 'Canada'
    }
}).then(() => {
    console.log("Data is Saved");
}).catch((e) => {
    console.log('Failed: ', e);
})