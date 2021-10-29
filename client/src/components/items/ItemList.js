import { AuthConsumer } from '../../providers/AuthProvider';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemList = ({ userItems, grabUserItems }) => {

  useEffect( () => {
    grabUserItems()
  }, [])

  return(
    <>
      <List divided verticalAlign='middle'>
        {userItems.map( i => 
          <Link to={{
            pathname: `/items/${i.id}`,
            state: {
              ...i
            }
          }}>
            <List.Item style={{display: 'flex', justifyContent: 'space-around'}}>
              <Image avatar src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
              <List.Content>
                <List.Header>{i.food_name} {i.title}</List.Header>
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