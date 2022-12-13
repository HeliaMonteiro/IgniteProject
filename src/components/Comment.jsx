import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/HeliaMonteiro.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Helia Santos</strong>
              <time title='11 of December at 4:35pm' dateTime="11-12-2022 4:35pm">Posted 1h ago</time>
            </div>

            <button title='Delete'>
              <Trash size={24} />
            </button>
          </header>

          <p>Very good Devon, congrats! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Clap <span>20</span>
          </button>
        </footer>
        
      </div>



    </div>
  )
}