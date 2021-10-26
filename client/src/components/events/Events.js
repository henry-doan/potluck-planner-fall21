import EventForm from './EventForm';
import EventList from './EventList';
import { Button, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { EventConsumer } from '../../providers/EventProvider';

const Events = ({ location, user }) => {
  const [open, setOpen] = useState(false)

  // const { title, event_date, event_time, details, image } = location.state
  return (
    <>
    {user && <h3>{user.name}</h3>}
      <h1>Hello</h1> 
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color="gray">Create Event</Button>}
      >
        <Modal.Header>Create an Event</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <EventForm 
              // id={id}
              // title={title}
              // event_date={event_date}
              // even_time={event_time}
              // details={details}
              // image={image}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='yellow' onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
      <br />
      <br />
      <br />
      <EventList />
    </>
  )
}

const ConnectedEvents = (props) => (
  <EventConsumer>
    { value => (<Events {...props} {...value} />)}
  </EventConsumer>
)

const AuthConnectedEvents = (props) => (
  <AuthConsumer>
    { value => (<ConnectedEvents {...props} {...value} />)}
  </AuthConsumer>
)


export default AuthConnectedEvents;