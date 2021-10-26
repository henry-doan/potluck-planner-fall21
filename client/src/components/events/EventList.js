import { EventConsumer } from '../../providers/EventProvider';
import ItemList from '../items/ItemList';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
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
            <Card>
    
      <Image src='https://images.unsplash.com/photo-1605926637563-ab877395ec88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRoYW5rc2dpdmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{e.title}</Card.Header>
          <Card.Meta>
          </Card.Meta>
        <Card.Description>
          Date and time
        </Card.Description>
      </Card.Content>
    
      </Card>

      <List.Item>
              <List.Content>
                <List.Header></List.Header>
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