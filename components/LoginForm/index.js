import React from 'react'
import styles from './Styles.module.css'
import { Google, Github, Facebook } from '../../icons'

export const LoginForm = ({ handleClickGitHub, handleClickGoogle }) => {
  return (
    <div className={styles.containerForm}>
      <input type='email' placeholder='Correo electrónico' />
      <input type='password' placeholder='Contraseña' />
      <button>
          Iniciar Sesion
      </button>
      <div className={styles.containerSocials}>
        <Google onClick={handleClickGoogle} />
        <Github onClick={handleClickGitHub} />
        <Facebook />
      </div>
    </div>
  )
}
