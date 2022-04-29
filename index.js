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
    phone: '786-677-2903',
}
db.collection('restaurants').add(restaurant) // database, go to collections & add the restaurant object we created
.then(doc => console.log('Created restaurant', doc.id)) // when it's successful, tell me
.catch(err => console.error(err)) // otherwise, send me an error message via error named err

// example below is adding restaurant2 using async await method rather than .then .catch

const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

    async function addRestaurant(data){
        try {
            const doc = await db.collection('restaurants').add(restaurant2)
            console.log('Created restaurant', doc.id)
        } catch(err){
            console.error(err)
        }
    }
    addRestaurant(restaurant2)