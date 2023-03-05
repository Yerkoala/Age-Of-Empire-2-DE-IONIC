import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo6s3LE3_vnN73YChl2o_1Dkail_pk-2M",
    authDomain: "ageofempire2de-f3504.firebaseapp.com",
    projectId: "ageofempire2de-f3504",
    storageBucket: "ageofempire2de-f3504.appspot.com",
    messagingSenderId: "237836645113",
    appId: "1:237836645113:web:e8f4f289cb3f989bee2828"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();