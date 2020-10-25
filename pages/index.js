import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useAuth } from '../context/authContext'
import { Cargando } from '../components/Cargando'

export default function Home () {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    user === null && router.push('/login')
    user && router.push('/home')
  }, [user])

  return (
    <div className={styles.containerProcesando}>
      <Cargando />
    </div>
  )
}
