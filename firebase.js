import { getApp, getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDkxhEAtxjC_wP-lVYLCvgbRFJ2RIvsQPE",
	authDomain: "v-simplify-b1c06.firebaseapp.com",
	projectId: "v-simplify-b1c06",
	storageBucket: "v-simplify-b1c06.appspot.com",
	messagingSenderId: "129130569355",
	appId: "1:129130569355:web:b9c40d9ca8f417251f3e8e",
	measurementId: "G-6NLQMWN6JT"
};

let fire;

if (!getApps().length) {
	// Initialize the Firebase app if it doesn't exist
	fire = initializeApp(firebaseConfig);
} else {
	// If the app already exists, get a reference to it
	fire = getApp();
}

export default fire;
