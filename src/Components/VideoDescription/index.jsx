import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'
import SongTicker from '../SongTicker/index.jsx'

export default function VideoDescription ({ albumImage, username, description, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.username} href={`/user/${username}`}>
              @{username}
            </a>
          </strong>
          <p className={styles.text}>
            {description}
          </p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
