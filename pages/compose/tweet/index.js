import { useState, useEffect } from 'react'
import AppLayout from '../../../components/AppLayout'
import { Button } from '../../../components/Button'
import styles from '../../../styles/Compose/tweet.module.css'
import { useAuth } from '../../../context/authContext'
import { addDevit, uploadImage } from '../../../firebase/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Avatar } from '../../../components/Avatar'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export default function ComposeTweet () {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const { user } = useAuth()
  const router = useRouter()
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  useEffect(() => {
    if (task) {
      const onProgress = () => {
        console.log('cargando', task)
      }
      const onError = () => {
        console.log('error', task)
      }
      const onComplete = () => {
        console.log('onComplete')
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSumit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.photoURL,
      content: message,
      userId: user.uid,
      userName: user.displayName,
      img: imgURL
    })
      .then(() => {
        router.push('/home')
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const handleDragEnter = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]

    const task = uploadImage(file)
    setTask(task)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <Head>
          <title>Crear tweet / Growlii Tweet</title>
        </Head>
        <section className={styles.formContainer}>
          {user && (
            <section className={styles.avatarContainer}>
              <Avatar src={user.photoURL} />
            </section>
          )}
          <form className={styles.containerTweet} onSubmit={handleSumit}>
            <textarea
              placeholder='¿Qué esta pasando?'
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={drag === DRAG_IMAGE_STATES.DRAG_OVER ? styles.drop : undefined}
            />
            {imgURL && (
              <section className={styles.imgTweet}>
                <button onClick={() => { setImgURL(null) }}>x</button>
                <img src={imgURL} />
              </section>
            )}
            <div>
              <Button
                disabled={isButtonDisabled}
              >
              Twittear
              </Button>
            </div>
          </form>
        </section>
      </AppLayout>
    </>
  )
}
