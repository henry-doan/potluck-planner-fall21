import React, { useState } from 'react';
import axios from 'axios';

export const ItemContext = React.createContext();
export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  
  const grabItems = (eventId) => {
    axios.get(`/api/events/${eventId}/items`)
      .then( res => setItems(res.data) )
      .catch( err => console.log(err))
  }

  const addItem = (eventId, item) => {
    axios.post(`/api/events/${eventId}/items`, { item })
      .then( res => { 
        setItems([...items, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateItem = (eventId, id, item) => {
    axios.put(`/api/events/${eventId}/items/${id}`, { item })
      .then(res => {
        const updatedItems = items.map( i => {
          if (i.id === id) {
            return res.data 
          }
          return i
        })
        setItems(updatedItems)
      })
      .catch( err => console.log(err))
  }

  const deleteItem = (eventId, id) => {
    axios.delete(`api/events/${eventId}/items/${id}`)
      .then(res => {
        setItems(items.filter( i => i.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <ItemContext.Provider value={{
      items,
      grabItems: grabItems,
      addItem: addItem,
      updateItem: updateItem,
      deleteItem: deleteItem,
    }}>
      { children}
    </ItemContext.Provider>
  )

}

export default ItemProvider;