/*
Author: Srilokh Karuturi
File: mongodb.js
Description: define a global mongodb session
*/

// import mongoclient from mongodb
import { MongoClient } from 'mongodb'

// define the mongodb .env.local url
const uri = process.env.MONGODB_URI
// define the options for mongodb
const options = {}

// define client and clientpromise
let client
let clientPromise

// if we get an error fetching please do this
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

// define client promise
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise