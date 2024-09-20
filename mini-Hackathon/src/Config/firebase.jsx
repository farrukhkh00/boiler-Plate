import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCZsV-P6e4Omt1Via5pwj5FkbX1O1-2ZDg",
  authDomain: "mini-hackathon-d3ad7.firebaseapp.com",
  projectId: "mini-hackathon-d3ad7",
  storageBucket: "mini-hackathon-d3ad7.appspot.com",
  messagingSenderId: "129363359861",
  appId: "1:129363359861:web:a54d93b76546f330c1a03c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db}