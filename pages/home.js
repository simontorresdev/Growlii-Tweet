import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Devit from '../components/Devit'
import styles from '../styles/Home.module.css'
import { fetchLatestDevits } from '../firebase/client'
import { useAuth } from '../context/authContext'
import Link from 'next/link'
import { Create, IconHome, Search } from '../icons'
import Head from 'next/head'

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
        <Head>
          <title>Home / Growlii Tweet</title>
        </Head>
        <header>
          <h2>Inicio</h2>
        </header>
        <section className={styles.containerTweets}>
          {timeline.map(({ id, img, userName, avatar, content, userId, createdAt }) => (
            <Devit
              avatar={avatar}
              createdAt={createdAt}
              id={id}
              img={img}
              key={id}
              content={content}
              userName={userName}
              userId={userId}
            />
          ))}
        </section>
        <nav className={styles.containerNav}>
          <Link href='/home'>
            <a>
              <IconHome width={30} height={30} stroke='#001B38' />
            </a>
          </Link>
          <Link href='/compose/tweet'>
            <a>
              <Search width={30} height={30} stroke='#001B38' />
            </a>
          </Link>
          <Link href='/compose/tweet'>
            <a>
              <Create width={30} height={30} stroke='#001B38' />
            </a>
          </Link>
        </nav>
      </AppLayout>
    </div>
  )
}
