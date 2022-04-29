// Created restaurant Mp7qbmcF3DqXPnVO31oL
// Created restaurant lrvK7C8MkytQ3jTzr4Ca

import admin from "firebase-admin"; // imports firebase library of tools

import serviceAccount from './credentials.js'; // imports credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials (.cert tells to turn this into a certificate)
});

// Now we are connected to our Firebase project & services 
 
const db = admin.firestore(); // creates a shortcut to the access the Firestore database

const restaurantsCollection = db.collection('restaurants'); // shortcut to point to our collection

// delete Mp7qbmcF3DqXPnVO31oL
restaurantsCollection.doc('Mp7qbmcF3DqXPnVO31oL').delete()
.then( res => console.log('Success deleting Mp7qbmcF3DqXPnVO31oL!!'))
.catch(err => console.error('Error deleting: Mp7qbmcF3DqXPnVO31oL:', err))

restaurantsCollection.doc('lrvK7C8MkytQ3jTzr4Ca').delete()
.then( res => console.log('Success deleting lrvK7C8MkytQ3jTzr4Ca!!'))
.catch(err => console.error('Error deleting:lrvK7C8MkytQ3jTzr4Ca:', err))