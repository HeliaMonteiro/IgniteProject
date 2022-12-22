import { format, formatDistanceToNow  } from 'date-fns';
import enAu  from 'date-fns/locale/en-AU';
import React, {useState} from 'react'; 

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

// author: {avatar-url: "", name: "", role: ""}
// publishAt: Date
// content: string
export function Post({author, publishAt, content}) {
  const [comments, setComments] = useState([
  "Cool post, I liked it!"
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishAt, "d 'of' LLLL'at' hh:mm'h'", {
    locale: enAu
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt,
    {
      locale: enAu,
      addSuffix: true, 
    })

  function handleCreateNewComment() {
    event.preventDefault()

    // ... spread operator make a copy of existent variables values.
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity();
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    // Immutable: the variables values can not be changed.
    // We create a new value for the variable.
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
          <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Post your feedback</strong>

        <textarea
          name="comment" 
          placeholder="Write your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
          />)
        })}
      </div>
    </article>
    )
}