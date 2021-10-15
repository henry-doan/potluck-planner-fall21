import { ItemConsumer } from '../../providers/ListProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemList = ({ items, grabitems }) => {

  useEffect( () => {
    itemsLists()
  }, [])

  return(
    <>
      <List divided relaxed>
        {items.map( l => 
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
    { value => <AllList {...value} {...props}/>}
  </ItemConsumer>
)

export default ConnectedItemList;