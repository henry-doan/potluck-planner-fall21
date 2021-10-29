import ItemForm from './ItemForm';
import ItemList from './ItemList';
import styled from 'styled-components';
import { Button, Divider } from 'semantic-ui-react'

const Items = ({ eventId }) => (
  <div>
    <Container>
      <h1 style={{textDecoration: 'underline', textDecorationColor: '#E34B36'}}>My Items</h1>
      <div>
        <Button style={{backgroundColor: "#122546", color: "white", width: "200px", textAlign: "center"}} attached='left'>Bringing</Button>
        <Button style={{width: "200px", textAlign: "center"}} attached='right'>Past Potlucks</Button>
      </div>
      {/* <ItemForm eventId={eventId}/> */}
      <Divider hidden />
      <div>
       <ItemList eventId={eventId}/>
      </div>
    </Container>
  </div>
)

export default Items;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: "Rubik";
`;

