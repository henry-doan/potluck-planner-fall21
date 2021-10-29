import { ItemConsumer } from "../../providers/ItemProvider";
import { useEffect } from "react";
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {ButtonWrapper} from '../styles/EventStyles';


const ShowEvent = ({ location, event, grabFindItem, findItem, eventItems, grabAssignedItems, getGrabAssignedItems }) => {

  const { id, title, event_date, event_time, details, image, event_id } = location.state

  useEffect(() => {
    getGrabAssignedItems(id)
  }, [])

  const filteredItems = grabAssignedItems.filter( i =>
      id === i.event_id
    )
console.log(filteredItems)
  return (
    <>
    <br>
    </br>
    <br>
    </br>
      <div> <img src={image} class="ui medium image"/></div>
      <h1>{title}</h1>
      <p>{event_date}</p>
      <p>{event_time}</p>
      <p>{details}</p>
      <br />

         <ButtonWrapper>
            <button class="ui primary button">
              Available
            </button>
            <button class="ui button">
              Assigned
            </button>
          </ButtonWrapper>



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
                <List.Header><img src={i.image} class="ui small image"/> </List.Header>
                <List.Header><h3 className="ui header">{i.food_name}</h3></List.Header>
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