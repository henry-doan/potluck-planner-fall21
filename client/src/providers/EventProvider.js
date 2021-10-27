import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [eventUsers, setEventUsers] = useState([])
  const [grabAssignedItems, setGrabAssignedItems] = useState([])

  useEffect(() => {
    axios.get('/api/events')
      .then( res => setEvents(res.data) )
      .catch( err => console.log(err))
  }, [])

  const grabEvents = () => {
    axios.get('/api/events')
      .then( res => setEvents(res.data) )
      .catch( err => console.log(err))
  }
  
  const grabEventUsers = (id) => {
    axios.get(`/api/eventUsers/${id}`)
      .then( res => setEventUsers(res.data) )
      .catch( err => console.log(err))
  }

  const getGrabAssignedItems = (id) => {
    axios.get(`/api/grabAssignedItems/${id}`)
      .then( res => setGrabAssignedItems(res.data))
      .catch( err => console.log(err))
  }

  const addEvent = (event) => {
    axios.post('/api/events', { event })
      .then( res => {
        setEvents([...events, res.data])
      })
      .catch( err => console.log(err))
  }

  const getUserEvent = (id, event) => {
    axios.get(`/api/userEvent/${id}`, {event})
      .then( res => setEvents(res.data) )
      .catch( err => console.log(err))
  }

  const updateEvent = (id, event) => {
    axios.put(`/api/events/${id}`, { event })
      .then(res => {
        const updatedEvents = events.map( l => {
          if (l.id === id) {
            return res.data 
          }
          return l
        })
        setEvents(updatedEvents)
        window.location.href = '/events'
      })
      .catch( err => console.log(err))
  }

  const deleteEvent = (id) => {
    axios.delete(`api/events/${id}`)
      .then(res => {
        setEvents(events.filter( l => l.id !== id))
        window.location.href = '/events'
      })
      .catch( err => console.log(err))
  }

  return (
    <EventContext.Provider value={{
      events,
      eventUsers,
      grabAssignedItems,
      grabEvents: grabEvents,
      addEvent: addEvent,
      updateEvent: updateEvent,
      deleteEvent: deleteEvent,
      getUserEvent: getUserEvent,
      grabEventUsers: grabEventUsers,
      getGrabAssignedItems: getGrabAssignedItems
    }}>
      { children}
    </EventContext.Provider>
  )

}

export default EventProvider;