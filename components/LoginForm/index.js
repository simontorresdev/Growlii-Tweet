import React from 'react'
import styles from './Styles.module.css'
import { Google, Github, Facebook } from '../../icons'
import useInput from '../../hooks/useInput'

export const LoginForm = ({ handleClickGitHub, handleClickGoogle, handleClickFacebook, loginWithEmailPassword }) => {
  const email = useInput('')
  const password = useInput('')

  return (
    <div className={styles.containerForm}>
      <input type='email' placeholder='Correo electrónico' onChange={email.onChange} />
      <input type='password' placeholder='Contraseña' onChange={password.onChange} />
      <button onClick={() => loginWithEmailPassword(email.value, password.value)}>
          Iniciar Sesion
      </button>
      <div className={styles.containerSocials}>
        <Google onClick={handleClickGoogle} />
        <Github onClick={handleClickGitHub} />
        <Facebook onClick={handleClickFacebook} />
      </div>
    </div>
  )
}
