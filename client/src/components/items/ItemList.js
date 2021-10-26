import { AuthConsumer } from '../../providers/AuthProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react'
import { Item } from 'semantic-ui-react'

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

            <Item.Group>  
              <Item>
                <Item.Image size='tiny' src='https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />

                <Item.Content>
                  <Item.Header>{i.food_name}</Item.Header>
                  <Item.Meta>Description</Item.Meta>
                  <Item.Description> 
                  </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
    

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