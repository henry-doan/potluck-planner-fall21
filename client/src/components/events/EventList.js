import { EventConsumer } from '../../providers/EventProvider';
import { Grid, Card, Image, Button, Icon, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const EventList = ({ events, grabEvents, deleteEvent, userEvents, grabUserEvents }) => {

  useEffect( () => {
    grabEvents()
  }, [grabEvents])

  return(
    <>
      <Grid columns={3} divided stackable>
        {events.map( e => 
          <Link to={{
            pathname: `/events/${e.id}`,
            state: {
              ...e
            }
          }}>
            <Grid.Column>
            <Card>
              <Image src={e.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{e.title}</Card.Header>
                <Card.Description>
                  {e.event_date} {e.event_time}
                  <br />
                  {e.details}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          </Link>
        )}
        </Grid>
    </>
  )
}

const ConnectedEventList = (props) => (
  <EventConsumer>
    { value => <EventList {...value} {...props}/>}
  </EventConsumer>
)

export default ConnectedEventList;