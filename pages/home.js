import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Devit from '../components/Devit'
import styles from '../styles/Home.module.css'

export default function Home () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <div className={styles.containerHome}>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
        <nav />
      </AppLayout>
    </div>
  )
}
