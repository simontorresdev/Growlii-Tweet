import { Logo } from '../../icons'
import styles from './Styles.module.css'

export const Cargando = () => {
  return (
    <div className={styles.containerCargando}>
      <Logo />
      <div className={styles.ldsEllipsis}><div /><div /><div /><div /></div>
    </div>
  )
}
