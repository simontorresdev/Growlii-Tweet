import { Avatar } from '../Avatar'
import styles from './Styles.module.css'
import useTimeAgo from '../../hooks/useTimeAgo'

export default function Devit ({ avatar, img, userName, content, id, createdAt }) {
  const timeago = useTimeAgo(createdAt)
  return (
    <>
      <article className={styles.containerDevit}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <div className={styles.nameDate}>
            <strong>{userName}</strong>
            <p>{timeago}</p>
          </div>
          <p>{content}</p>
          {img && <img src={img} className={styles.imgTweet} />}
        </section>
      </article>
    </>
  )
}
