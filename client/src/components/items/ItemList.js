import { ItemConsumer } from '../../providers/ItemProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemList = ({ items, grabItems }) => {

  useEffect( () => {
    grabItems()
  }, [])

  return(
    <>
      <List divided relaxed>
        {items.map( i => 
          <Link to={{
            pathname: `/items/${i.id}`,
            state: {
              ...i
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{i.title}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedItemList = (props) => (
  <ItemConsumer>
    { value => <ItemList {...value} {...props}/>}
  </ItemConsumer>
)

export default ConnectedItemList;