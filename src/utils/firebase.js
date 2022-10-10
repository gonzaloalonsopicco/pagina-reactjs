import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDxmKmbtPxYk2DCimQQwHXw-FToOvxXD0",
    authDomain: "proyecto-react-87b00.firebaseapp.com",
    projectId: "proyecto-react-87b00",
    storageBucket: "proyecto-react-87b00.appspot.com",
    messagingSenderId: "18655296360",
    appId: "1:18655296360:web:4f9df7da16aff160b574dd"
};

const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app);