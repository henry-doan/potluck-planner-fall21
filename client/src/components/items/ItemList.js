import { AuthConsumer } from '../../providers/AuthProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemList = ({ userItems, grabUserItems }) => {

  useEffect( () => {
    grabUserItems()
  }, [])

  return(
    <>
      <List divided relaxed>
        {userItems.map( i => 
          <Link to={{
            pathname: `/items/${i.id}`,
            state: {
              ...i
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{i.food_name}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedItemList = (props) => (
  <AuthConsumer>
    { value => <ItemList {...value} {...props}/>}
  </AuthConsumer>
)

export default ConnectedItemList;