import styles from './styles.module.css'

export default function AlbumDisk ({ albumImage }) {
  return (
    <div className={styles.album}>
      <img className={styles.albumCover} src={albumImage} />
    </div>
  )
}
