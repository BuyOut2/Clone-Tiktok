import styles from './styles.module.css'
import MusicIcon from '../Icons/MusicIcon.jsx'
import Marquee from 'react-fast-marquee'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed={100}>
        {songTitle}
      </Marquee>
    </div>
  )
}

// Se importa Marquee React Fast para hacer el movimiento del titulo de la musica //
