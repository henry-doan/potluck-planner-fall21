import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ItemContext = React.createContext();
export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  
  const grabItems = () => {
    axios.get('/api/items')
      .then( res => setItems(res.data) )
      .catch( err => console.log(err))
  }

  const addItem = (item) => {
    axios.post('/api/items', { item })
      .then( res => {
        setItems([...items, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateItem = (id, item) => {
    axios.put(`/api/items/${id}`, { item })
      .then(res => {
        const updatedItems = items.map( i => {
          if (i.id == id) {
            return res.data 
          }
          return i
        })
        setItems(updatedItems)
      })
      .catch( err => console.log(err))
  }

  const deleteItem = (id) => {
    axios.delete(`api/items/${id}`)
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