import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAzO5f-xvBVCtiht797ybsLo6Lwh75aqVU",
    authDomain: "nextjs-multi-ecom.firebaseapp.com",
    projectId: "nextjs-multi-ecom",
    storageBucket: "nextjs-multi-ecom.appspot.com",
    messagingSenderId: "804434987266",
    appId: "1:804434987266:web:4b0d9f7ebf613e9825da1b",
    measurementId: "G-C2EHJVS50E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
