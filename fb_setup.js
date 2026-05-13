const firebaseConfig = {
  apiKey: "AIzaSyCZg-gtpgx2GffckokHsP8w-P5vyZnQPD0",
  authDomain: "joshua-earp-12comp.firebaseapp.com",
  databaseURL: "https://joshua-earp-12comp-default-rtdb.firebaseio.com",
  projectId: "joshua-earp-12comp",
  storageBucket: "joshua-earp-12comp.firebasestorage.app",
  messagingSenderId: "859205823509",
  appId: "1:859205823509:web:459eb5a0f82280fdf4721c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("firebase initilize finished");
console.log(firebase);