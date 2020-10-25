import * as firebase from 'firebase'
import 'firebase/auth'

// Iniciamos firebase

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDArU7daG_f3RlM5QaSIjIeZJ4f9LpOwus',
    authDomain: 'growlii-ensayo.firebaseapp.com',
    databaseURL: 'https://growlii-ensayo.firebaseio.com',
    projectId: 'growlii-ensayo',
    storageBucket: 'growlii-ensayo.appspot.com',
    messagingSenderId: '231036670181',
    appId: '1:231036670181:web:a2ec9037fad8c703e3c40c',
    measurementId: 'G-GVW18Z3B1G'
  })

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}
export { firebase }

export const addDevit = ({ avatar, content, userId, userName }) => {
  return firebase.firestore().collection('devits').add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const fetchLatestDevits = () => {
  return firebase.firestore()
    .collection('devits')
    .get()
    .then(snapshot => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-Es').format(date)

        return {
          ...data,
          id: id,
          createdAt: normalizedCreatedAt
        }
      })
    })
}
