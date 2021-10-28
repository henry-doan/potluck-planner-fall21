import { useState, useEffect } from 'react';
import { CommentConsumer } from '../../providers/CommentProvider';

const CommentForm = ({addComment, id, item_id, subject, body, author, updateComment, setEdit}) => {
  const [comment, setComment] = useState({ subject: "", body: "", author: "" })

  useEffect(()=> {
    if (id) {
      setComment({ subject, body, author })  
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
        updateItem(id, comment)
        setEdit(false)
    } else {
        addComment(comment)
    }
    setItem({subject: "", body: "", author: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="subject"
          value={comment.subject}
          onChange={(e) => setComment({...comment, subject: e.target.value })}

          required
          placeholder="Subject"
        />
        <input
          name="body"
          value={comment.body}
          onChange={(e) => setComment({...comment, body: e.target.value })}

          required
          placeholder="Body"
        />
        <input
          name="author"
          value={comment.author}
          onChange={(e) => setComment({...comment, author: e.target.value })}

          required
          placeholder="Author"
        />

        

        <button type="submit">Submit</button>
      </form>
    
    </>
    )
  }

  const ConnectedCommentForm = (props) => (
    <CommentConsumer>
      { value => <CommentForm {...props} {...value} />}
    </CommentConsumer>
  )

export default ConnectedCommentForm;