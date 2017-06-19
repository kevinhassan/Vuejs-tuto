import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDiWdXxaMu8AJsJKHFpp0ppSl2QR0vQ-AE",
    authDomain: "turnout-c3591.firebaseapp.com",
    databaseURL: "https://turnout-c3591.firebaseio.com",
    projectId: "turnout-c3591",
    storageBucket: "turnout-c3591.appspot.com",
    messagingSenderId: "833518954792"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
