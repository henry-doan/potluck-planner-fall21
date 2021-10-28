import React, { useState } from 'react';
import axios from 'axios';

export const CommentContext = React.createContext();
export const CommentConsumer = CommentContext.Consumer;

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])
  // const [grabAssignedComments, setGrabAssignedComments] = useState([])

  
  const grabComments = (itemId) => {
    axios.get(`/api/items/${itemId}/comments`)
      .then( res => set(res.data) )
      .catch( err => console.log(err))
  }


  const addComment = (itemId, comment) => {
    axios.post(`/api/items/${itemId}/comments`, { comment })
      .then( res => { 
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateComment = (itemId, id, comment) => {
    axios.put(`/api/items/${itemId}/comments/${id}`, { comment })
      .then(res => {
        const updatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data 
          }
          return c
        })
        setComments(updatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment= (itemId, id) => {
    axios.delete(`api/items/${itemId}/comments/${id}`)
      .then(res => {
        setComments(comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <CommentContext.Provider value={{
      comments,
      grabComments: grabComments,
      addComment: addComment,
      updateComment: updateComment,
      deleteComment: deleteComment,
    }}>
      { children}
    </CommentContext.Provider>
  )

}

export default CommentProvider;