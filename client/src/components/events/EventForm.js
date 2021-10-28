import { useState, useEffect } from 'react';
import { EventConsumer } from '../../providers/EventProvider';
// import { AuthConsumer } from '../../providers/AuthProvider';

const EventForm = ({addEvent, id, title, event_date, event_time, details, image, updateEvent, setEdit}) => {
  const [event, setEvent] = useState({title: "", event_date: "", event_time: "", image: "", details: "" })

  useEffect(()=> {
    if (id) {
      setEvent({ title, event_date, event_time, details, image})  
    }
  }, [])
  //


//
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
        updateEvent(id, event)
        setEdit(false)
    } else {
        addEvent(event)
    }
    setEvent({title: "", event_date: "", event_time: "", details: "", image: ""})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={event.title}
          onChange={(e) => setEvent({...event, title: e.target.value })}

          required
          placeholder="Title"
        />
        <input
          name="event_date"
          value={event.event_date}
          onChange={(e) => setEvent({...event, event_date: e.target.value })}

          required
          placeholder="Event Date"
        />

        <input
          name="event_time"
          value={event.event_time}
          onChange={(e) => setEvent({...event, event_time: e.target.value })}

          required
          placeholder="Event Time"
        />
        <input
          name="details"
          value={event.details}
          onChange={(e) => setEvent({...event, details: e.target.value })}

          required
          placeholder="Details"
        />
        <input
          // type=?
          name="image"
          value={event.image}
          onChange={(e) => setEvent({...event, image: e.target.value })}

          required
          placeholder="Image"
        />
        <button type="submit">Submit</button>
      </form>
    
    </>
    )
  }

  const ConnectedEventForm = (props) => (
    <EventConsumer>
      { value => <EventForm {...props} {...value} />}
    </EventConsumer>
  )

export default ConnectedEventForm;