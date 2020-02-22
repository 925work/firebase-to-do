import firebase from 'firebase';

const firebaseConfig ={
    apiKey: "AIzaSyDyQXACmh5zq8i7Pwt-WZbY52hl6arTrH4",
    authDomain: "react-to-do-57b09.firebaseapp.com",
    databaseURL: "https://react-to-do-57b09.firebaseio.com",
    projectId: "react-to-do-57b09",
    storageBucket: "react-to-do-57b09.appspot.com",
    messagingSenderId: "31725447224",
    appId: "1:31725447224:web:81d73459f4a18031515ecd"
}

const fire = firebase.initializeApp(firebaseConfig);

export default fire;