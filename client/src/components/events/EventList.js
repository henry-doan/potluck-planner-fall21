import { EventConsumer } from '../../providers/EventProvider';
import { Event} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const EventList = ({  events, grabEvents }) => {

  useEffect( () => {
    grabEvents()
  }, [])

  return(
    <>
      <Event divided relaxed>
        {events.map( e => 
          <Link to={{
            pathname: `/events/${e.id}`,
            state: {
              ...e
            }
          }}>
            <Event.Item>
              <Event.Content>
                <Event.Header>{e.title}</Event.Header>
              </Event.Content>
            </Event.Item>
          </Link>
        )}
      </Event>
    </>
  )
}

const ConnectedEventList = (props) => (
  <EventConsumer>
    { value => <EventList {...value} {...props}/>}
  </EventConsumer>
)

export default ConnectedEventList;