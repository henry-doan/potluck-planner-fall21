import { EventConsumer } from '../../providers/EventProvider';
import ItemList from '../items/ItemList;
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const EventList = ({  events, grabEvents }) => {

  useEffect( () => {
    grabEvents()
  }, [])

  return(
    <>
      <List divided relaxed>
        {events.map( e => 
          <Link to={{
            pathname: `/events/${e.id}`,
            state: {
              ...e
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{e.title}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedEventList = (props) => (
  <EventConsumer>
    { value => <EventList {...value} {...props}/>}
  </EventConsumer>
)

export default ConnectedEventList;