import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const options = {
	apiKey: "AIzaSyCNipcaWjLF4tBPcfj3nOwg27gm38wbiVI",
	authDomain: "bingoproject-9e820.firebaseapp.com",
	databaseURL: "https://bingoproject-9e820-default-rtdb.firebaseio.com",
	projectId: "bingoproject-9e820",
	storageBucket: "bingoproject-9e820.appspot.com",
	messagingSenderId: "754975308016",
	appId: "1:754975308016:web:c580af2cf788f2323a2a35",
	measurementId: "G-CST5FNPQ6N"
}

const app = initializeApp(options)
const db = getDatabase(app)
const auth = getAuth(app)

export {auth, db};