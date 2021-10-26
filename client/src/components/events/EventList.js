import { AuthConsumer } from '../../providers/AuthProvider';
import { Grid, Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const EventList = ({ events, grabEvents, deleteEvent, userEvents, grabUserEvents }) => {

  useEffect( () => {
    grabUserEvents()
  }, [])

  return(
    <>
      <Grid columns={3} divided stackable>
        {userEvents.map( e => 
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
  <AuthConsumer>
    { value => <EventList {...value} {...props}/>}
  </AuthConsumer>
)

export default ConnectedEventList;