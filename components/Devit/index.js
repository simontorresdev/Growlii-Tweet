import { Avatar } from '../Avatar'
import styles from './Styles.module.css'

export default function Devit ({ avatar, username, message, id }) {
  return (
    <>
      <article className={styles.containerDevit}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
    </>
  )
}
