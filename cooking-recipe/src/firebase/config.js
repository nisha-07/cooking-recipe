import "firebase/firestore"

import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA-rLlGOgrRImTPxx_HmWmMIeunUi2TcvY",
    authDomain: "cooking-recipe-site-d4486.firebaseapp.com",
    projectId: "cooking-recipe-site-d4486",
    storageBucket: "cooking-recipe-site-d4486.appspot.com",
    messagingSenderId: "107252769638",
    appId: "1:107252769638:web:c61d94a7621e03a63e5ea7",
    measurementId: "G-T4LKKDGWM1"
};

// ini firebase
// this will connect to firebase backend project
firebase.initializeApp(firebaseConfig)

// ini services
// this will be using further to use database of firebase services
const projectFirebasestore = firebase.firestore()

export { projectFirebasestore }