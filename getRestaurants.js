import admin from "firebase-admin"; // imports firebase library of tools

import serviceAccount from './credentials.js'; // imports credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials (.cert tells to turn this into a certificate)
});

// Now we are connected to our Firebase project & services 
 
const db = admin.firestore(); // creates a shortcut to the access the Firestore database

const restaurantsCollection = db.collection('restaurants'); // shortcut to point to our collection

// restaurantsCollection.get() // get all restaurants
// .then(snapshot => {
//     // loop through all results
// snapshot.docs.forEach(doc => console.log(doc.data()))
// })
// .catch(console.error)

restaurantsCollection.where('name', '==', 'Bolay').get() //get all restaurants where the name is Bolay
.then(snapshot => {
    // loop through all results
snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error)