import { useState, useEffect } from 'react';

const ItemForm = ({addItem, id, event_id, user_id, food_name, complete, updateItem, setEdit}) => {
  const [item, setItem] = useState({ food_name: "", complete: false })

  useEffect(()=> {
    if (id) {
      setItem({ food_name, complete})  
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
        updateItem(id, item)
        setEdit(false)
    } else {
        addItem(item)
    }
    setItem({food_name: "", complete: false})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="food_name"
          value={item.food_name}
          onChange={(e) => setItem({...item, food_name: e.target.value })}

          required
          placeholder="Food Name"
        />

        <input
          type="checkbox"
          name="complete"
          value={item.complete}
          onChange={(e) => setItem({...item, complete: e.target.value})}
          checked={item.complete}
        />

        <button type="submit">Submit</button>
      </form>
    
    </>
    )
  }

export default ItemForm;