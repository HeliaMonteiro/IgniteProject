import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// author: {avatar-url: "", name: "", role: ""}
// publishAt: Date
// content: string

export function Post({author, publishAt}) {
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title='11 of December at 4:35pm' dateTime="11-12-2022 4:35pm">Posted 1h ago</time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Post your feedback</strong>

        <textarea 
          placeholder='Write your comment'
        />

        <footer>
          <button type='submit'>Post</button>
        </footer>
      </form>

      <div className={styles.commentList}></div>
        <Comment/>
        <Comment/>
        <Comment/>
    </article>
  )
}