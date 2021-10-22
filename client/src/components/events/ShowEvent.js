import { ItemConsumer } from "../../providers/ItemProvider";
import { useEffect } from "react";
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ShowEvent = ({ location, grabFindItem, findItem, eventItems, grabAssignedItems, getGrabAssignedItems }) => {

  const { id, title, event_date, event_time, details, image, event_id } = location.state

  useEffect(() => {
    getGrabAssignedItems(id)
  }, [])

  const filteredItems = grabAssignedItems.filter( i =>
      id === i.event_id
    )

  return (
    <>  
      <div>{image}</div>
      <h1>{title}</h1>
      <p>{event_date}</p>
      <p>{event_time}</p>
      <p>{details}</p>
      <br />
      <List divided relaxed>
        {filteredItems.map( i => 
          <Link to={{
            pathname: `/items/${i.id}`,
            state: {
              ...i
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{i.food_name}</List.Header>
                <List.Header>{i.name}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedFindItem = (props) => (
  <ItemConsumer>
    { value => <ShowEvent {...value} {...props}/>}
  </ItemConsumer>
)

export default ConnectedFindItem;