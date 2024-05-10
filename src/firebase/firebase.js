// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

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

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// set(ref(database, ), {
//     name: 'MAN Yoon',
//     age: 21,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log("Data is Saved");
// }).catch((e) => {
//     console.log('Failed: ', e);
// })


// push(ref(database), {
//     name: 'Darnell',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log("Data is Saved");
// }).catch((e) => {
//     console.log('Failed: ', e);
// })

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });