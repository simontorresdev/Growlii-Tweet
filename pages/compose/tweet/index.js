import { useState } from 'react'
import AppLayout from '../../../components/AppLayout'
import { Button } from '../../../components/Button'
import styles from '../../../styles/Compose/tweet.module.css'
import { useAuth } from '../../../context/authContext'
import { addDevit } from '../../../firebase/client'

export default function ComposeTweet () {
  const [message, setMessage] = useState('')
  const { user } = useAuth()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSumit = (event) => {
    event.preventDefault()
    addDevit({
      avatar: user.photoURL,
      content: message,
      userId: user.uid,
      userName: user.displayName
    })
  }

  return (
    <>
      <AppLayout>
        <form className={styles.containerTweet} onSubmit={handleSumit}>
          <textarea placeholder='¿Qué esta pasando?' onChange={handleChange} />
          <div>
            <Button
              disabled={message.length === 0}
            >
              Twittear
            </Button>
          </div>
        </form>
      </AppLayout>
    </>
  )
}
