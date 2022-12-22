import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
   onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

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

            <button onClick={handleDeleteComment} title='Delete'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
    
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
        
      </div>



    </div>
  )
}