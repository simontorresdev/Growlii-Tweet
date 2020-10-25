import { useRouter } from 'next/router'
import styles from './Styles.module.css'
import { RegisterForm } from '../RegisterForm'
import { useAuth } from '../../context/authContext'
import Link from 'next/link'

export const RegisterComp = () => {
  const router = useRouter()
  const { user, signinWithEmailPassword, signinWithGoogle, siginWithFacebook, singinWithGitBub } = useAuth()

  user && router.push('/')

  return (
    <div className={styles.containerRegister}>
      <img src='/Logo.png' />
      {user === null &&
        <RegisterForm
          handleClickGitHub={singinWithGitBub}
          handleClickGoogle={signinWithGoogle}
          handleClickFacebook={siginWithFacebook}
          signinWithEmailPassword={signinWithEmailPassword}
        />}
      <Link href='/login'><a>¿Ya tienes una cuenta? Inicia sesión</a></Link>
    </div>
  )
}
