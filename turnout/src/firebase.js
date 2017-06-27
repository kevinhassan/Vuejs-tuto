import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyAHXPe5XOY_QoVSrXvUjRzQQeZMdt0FOgk",
    authDomain: "turnout-a67df.firebaseapp.com",
    databaseURL: "https://turnout-a67df.firebaseio.com",
    projectId: "turnout-a67df",
    storageBucket: "turnout-a67df.appspot.com",
    messagingSenderId: "571822481832"
};

export const firebaseApp = firebase.initializeApp(config)
