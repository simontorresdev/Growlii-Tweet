import { useState } from 'react'
import AppLayout from '../../../components/AppLayout'
import { Button } from '../../../components/Button'
import styles from '../../../styles/Compose/tweet.module.css'
import { useAuth } from '../../../context/authContext'
import { addDevit } from '../../../firebase/client'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

export default function ComposeTweet () {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const { user } = useAuth()
  const router = useRouter()

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
      userName: user.displayName
    })
      .then(() => {
        router.push('/home')
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <form className={styles.containerTweet} onSubmit={handleSumit}>
          <textarea placeholder='¿Qué esta pasando?' onChange={handleChange} />
          <div>
            <Button
              disabled={isButtonDisabled}
            >
              Twittear
            </Button>
          </div>
        </form>
      </AppLayout>
    </>
  )
}
