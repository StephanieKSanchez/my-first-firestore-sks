import admin from "firebase-admin"; // imports firebase library of tools
import serviceAccount from './credentials.js'; // imports credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials (.cert tells to turn this into a certificate)
});
 
// const db = admin.firestore(); // creates a shortcut to the access the Firestore database
// const restaurantsCollection = db.collection('restaurants'); // shortcut to point to our collection

const db = admin.firestore();
export const restaurantsCollection = db.collection('restaurants');