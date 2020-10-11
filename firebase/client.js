import * as firebase from 'firebase'

// DEFINIMOS LAS CREDENCIALES PARA CONECTARNOS CON NUESTRO PROYECTO DE FIREBASE

const firebaseConfig = {
  apiKey: 'AIzaSyDArU7daG_f3RlM5QaSIjIeZJ4f9LpOwus',
  authDomain: 'growlii-ensayo.firebaseapp.com',
  databaseURL: 'https://growlii-ensayo.firebaseio.com',
  projectId: 'growlii-ensayo',
  storageBucket: 'growlii-ensayo.appspot.com',
  messagingSenderId: '231036670181',
  appId: '1:231036670181:web:a2ec9037fad8c703e3c40c',
  measurementId: 'G-GVW18Z3B1G'
}

// INICIALIZAMOS FIREBASE

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

// ORDENAMOS LOS DATOS RECIBIDOS DE LA SESION A NUESTRA CONVENIENCIA

const mapUserFromFirebaseAuthToUser = (user) => {
  if (user != null) {
    const { displayName, email, photoURL } = user
    return {
      avatar: photoURL,
      username: displayName,
      email
    }
  } else {
    return null
  }
}

// ESTA FUNCION SE EJECUTA CADA VEZ QUE INICIAMOS O CERRAMOS SESION, SI LA INVOCAMOS SABREMOS SI TENEMOS UNA SESION INICIADA

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizeUser = mapUserFromFirebaseAuthToUser(user)
      mapUserFromFirebaseAuthToUser(user)
      onChange(normalizeUser)
    })
}

// INICIAMOS SESION CON GITHUB

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

// INICIAMOS SESIÓN EN TODAS LAS REDES

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}
