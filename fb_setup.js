const firebaseConfig = {
  apiKey: "AIzaSyB-sNavt2IfLsvCQqbvP_TWkkfyKrMuUrc",
  authDomain: "comp-firebase-mini-project.firebaseapp.com",
  databaseURL: "https://comp-firebase-mini-project-default-rtdb.firebaseio.com",
  projectId: "comp-firebase-mini-project",
  storageBucket: "comp-firebase-mini-project.firebasestorage.app",
  messagingSenderId: "457653368279",
  appId: "1:457653368279:web:4c9628458d2fde79384792"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

console.log("firebase initilize finished");
console.log(firebase);