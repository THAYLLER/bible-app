import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
          apiKey: "AIzaSyCMfH1ik_kUI1ezL0uhShTEr6EOdHnF8vA",
          authDomain: "bible-app-162818.firebaseapp.com",
          databaseURL: "https://bible-app-162818.firebaseio.com",
          storageBucket: "bible-app-162818.appspot.com"
        });
    }

}

module.exports = Firebase;