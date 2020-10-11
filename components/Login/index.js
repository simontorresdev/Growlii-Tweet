import { useState, useEffect } from 'react'
import styles from './Styles.module.css'
import { LoginForm } from '../LoginForm'

import {
  loginWithGitHub,
  onAuthStateChanged,
  loginWithGoogle
} from '../../firebase/client'

export const LoginComp = () => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(user => setUser(user))
    console.log(user)
  }, [])

  const handleClickGitHub = () => {
    loginWithGitHub().then(user => {
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  const handleClickGoogle = () => {
    loginWithGoogle().then(user => {
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div className={styles.containerLogin}>
      <img src='/Logo.png' />
      {user === null &&
        <LoginForm
          handleClickGitHub={handleClickGitHub}
          handleClickGoogle={handleClickGoogle}
        />}
      {user && user.avatar &&
        <div>
          <img src={user.avatar} />
          <strong>{user.username}</strong>
        </div>}

    </div>
  )
}
