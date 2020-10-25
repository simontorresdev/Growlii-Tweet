import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Devit from '../components/Devit'
import styles from '../styles/Home.module.css'
import { fetchLatestDevits } from '../firebase/client'
import { useAuth } from '../context/authContext'

export default function Home () {
  const [timeline, setTimeline] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    user && fetchLatestDevits().then((timeline) => {
      setTimeline(timeline)
      console.log(timeline)
    })
  }, [user])

  return (
    <div className={styles.containerHome}>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, userName, avatar, content, userId, createdAt }) => (
            <Devit
              avatar={avatar}
              createdAt={createdAt}
              id={id}
              key={id}
              content={content}
              userName={userName}
              userId={userId}
            />
          ))}
        </section>
        <nav />
      </AppLayout>
    </div>
  )
}
