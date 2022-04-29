import { restaurantsCollection} from './connectDb.js'

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