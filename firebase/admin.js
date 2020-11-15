const admin = require('firebase-admin')

let clavesAdmin = {
  type: process.env.NEXT_LOCAL_FIREBASE_ADMIN_TYPE,
  project_id: process.env.NEXT_LOCAL_FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.NEXT_LOCAL_FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_LOCAL_FIREBASE_ADMIN_PRIVATE_KEY,
  client_email: process.env.NEXT_LOCAL_FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.NEXT_LOCAL_FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: process.env.NEXT_LOCAL_FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.NEXT_LOCAL_FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.NEXT_LOCAL_FIREBASE_ADMIN_AUTH_PROVIDER,
  client_x509_cert_url: process.env.NEXT_LOCAL_FIREBASE_ADMIN_CLIENT_CERT_URL
}

// console.log(clavesAdmin)

clavesAdmin = JSON.stringify(clavesAdmin)
const serviceAccount = JSON.parse(clavesAdmin)

// const serviceAccount = require('./firebase-keys.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://growlii-ensayo.firebaseio.com'
  })
} catch (e) {}

export const firestore = admin.firestore()
