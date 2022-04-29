const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const restaurant = {
    name: 'Mister 01',
    address: '55 N Federal Hwy Suite # 5, Boca requestAnimationFrame, FL 33432',
    cuisine: 'pizza',
    rating: 4.9,
    phone: '786-677-2903'
}
db.collection('restaurants').add(restaurant)
.then(doc => console.log('Created restaurant', doc.id))
.catch(err => console.error(err))