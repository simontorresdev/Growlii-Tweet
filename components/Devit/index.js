import { Avatar } from '../Avatar'
import styles from './Styles.module.css'

export default function Devit ({ avatar, userName, content, id, createdAt }) {
  return (
    <>
      <article className={styles.containerDevit}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <div className={styles.nameDate}>
            <strong>{userName}</strong>
            <p>{createdAt}</p>
          </div>
          <p>{content}</p>
        </section>
      </article>
    </>
  )
}
