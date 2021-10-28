import { useState } from 'react';
import CommentForm from './CommentForm';


const Comment = ({id, item_id, subject, body, author, deleteComment, updateComment}) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {subject}
        <br/>
        {
          editing ?
          <>
            <CommentForm 
            id={id}
            item_id={item_id}
            subject={subject}
            body={body}
            author={author}
            updateComment={updateComment}
            setEdit={setEdit}
            />
          </>
          :
          <button onClick= {()=> setEdit(true)}>Edit</button>
        }
        <button onClick= {() => deleteEvent(id)}>Delete</button>
      </li>

    </>
  )
}

export default Comment;


