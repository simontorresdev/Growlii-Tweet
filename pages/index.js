import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import {
  loginWithGitHub,
  onAuthStateChanged
} from '../firebase/client'

export default function Home () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(user => setUser(user))
    console.log(user)
  }, [])

  const handleClick = () => {
    loginWithGitHub().then(user => {
      const { avatar, username, url } = user
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <img src='/Logo.png' alt='' />
      {user === null &&
        <button onClick={handleClick}>
          Iniciar Sesion
        </button>}
      {user && user.avatar &&
        <div>
          <img src={user.avatar} />
          <strong>{user.username}</strong>
        </div>}

    </div>
  )
}
