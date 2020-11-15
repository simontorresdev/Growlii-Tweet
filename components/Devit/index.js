import { Avatar } from '../Avatar'
import styles from './Styles.module.css'
import useTimeAgo from '../../hooks/useTimeAgo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useDateTimeFormat from '../../hooks/useDateTimeFormat'

export default function Devit ({ avatar, img, userName, content, id, createdAt }) {
  const timeago = useTimeAgo(createdAt)
  const router = useRouter()
  const createdAtFormated = useDateTimeFormat(createdAt)

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return (
    <>
      <article className={styles.containerDevit} onClick={handleArticleClick}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <div className={styles.nameDate}>
            <strong>{userName}</strong>
            <Link href={`/status/${id}`}>
              <a>
                <time title={createdAtFormated}>{timeago}</time>
              </a>
            </Link>
          </div>
          <p>{content}</p>
          {img && <img src={img} className={styles.imgTweet} />}
        </section>
      </article>
    </>
  )
}
