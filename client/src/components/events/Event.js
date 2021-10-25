import { useState } from 'react';
import { Redirect } from 'react-router';
import EventForm from './EventForm';
import styled from 'styled-components';

const Event = ({id, title, event_date, details, image, event_time, deleteEvent, updateEvent}) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br/>
        Complete ? { complete ? "Yes" : "No" }
        {
          editing ?
          <>
            <EventForm 
            id={id}
            title={title}
            image={image}
            details={details}
            event_date={event_date}
            event_time={event_time}
            updateEvent={updateEvent}
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

export default Event;

const button = styled.button
color: Red;
;



