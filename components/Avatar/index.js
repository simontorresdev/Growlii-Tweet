import styles from './Styles.module.css'

export const Avatar = ({ src, alt, text }) => {
  return (
    <div className={styles.containerAvatar}>
      <img src={src} alt={alt} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  )
}
