import {getApp,getApps,initializeApp} from 'firebase/app';
import 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

var firebaseConfig = {
	apiKey: `${process.env.NEXT_PUBLIC_Firebase_API_Key}`,
	authDomain: `${process.env.NEXT_PUBLIC_Auth_Domain}`,
	projectId: `${process.env.NEXT_PUBLIC_Project_Id}`,
	storageBucket: `${process.env.NEXT_PUBLIC_Storage_Bucket}`,
	messagingSenderId: `${process.env.NEXT_PUBLIC_Message_Sender_Id}`,
	appId: `${process.env.NEXT_PUBLIC_App_Id}`
};

let fire;

if (!getApps.length) {
	fire = initializeApp(firebaseConfig);
} else {
	fire = getApp();
}

export default fire;
