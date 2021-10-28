import { useState } from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ShowItem = ({ location, eventId, deleteItem }) => {
  const [showForm, setShowForm] = useState(false) 

  const { id, food_name } = location.state
  return (
    <div>  
      <Container>
        <h1 style={{alignItems: "center"}}>Item Details</h1>
        {/* <Card.Group> */}
          <Card fluid>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Image src='https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' size='small' circular />
            <h3>{food_name}</h3>
          </div>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Button fluid>I will bring it</Button>
                </Grid.Column> 
                <Grid.Column> 
                  <Button fluid>Assign To</Button>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Button fluid color="#E6E6E8" onClick={() => setShowForm(!showForm)}>
                    Edit Item
                  </Button>
                    {showForm && <ItemForm />}
                  </Grid.Column>  
                  <Grid.Column>  
                  <Button fluid style={{backgroundColor: "#E34B36"}} onClick={() => deleteItem(eventId)}>
                    Delete
                  </Button>
                </Grid.Column>
              </Grid.Row>  
            </Grid>
            <br />
            <Link to="/comments">
              <Button fluid>Comments</Button>
            </Link>
          </Card>    
        {/* </Card.Group> */}
        <Button fluid style={{width: "700px", backgroundColor: "#122546", color: "white"}}>Save</Button>
      </Container>
    </div>
  )
}

const ConnectedShowItem = (props) => (
  <ItemConsumer>
    { value => <ShowItem {...props} {...value} />}
  </ItemConsumer>
)

export default ConnectedShowItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: "Rubik";
`;

const Card = styled.div`
  height: 425px;
  width: 700px;
  margin: 60px;
  color: #122546;
  font-family: "Rubik";
  font-size: 1.5em;
  background-color: #e6e6e8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  padding: 20px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

