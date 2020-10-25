import styles from './Styles.module.css'

export const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      className={styles.containerButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
