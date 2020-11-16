import admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
      private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL
    }),
    databaseURL: 'https://growlii-ensayo.firebaseio.com'
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack)
  }
}

export const firestore = admin.firestore()
