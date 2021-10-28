import styled from 'styled-components';
import Login from '../auth/Login';
import Register from '../auth/Register';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Image from '../images/Potluck Planner/Potluck Planner 1x/2.png';
const Home = () => (
  <> 
  <Grid columns={3} divided stackable>

  <CustomElement>
  <Logo src={'2.png'} />
  <ButtonWrapper>
    <Button exact path="../auth/Register" component={Register}>Sign up</Button>
    <br></br>
    <br></br>
    <br></br>
  <Button exact path="/login" component={Login}>Login </Button>
</ButtonWrapper>
</CustomElement>
</Grid>
</>
)


export default Home;

const CustomElement = styled.div`
background-image: url("https://images.unsplash.com/photo-1463183547458-6a2c760d0912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80");
height: 2000px;
width: 2000px;
.footer_classname{
  display: none;
  }
`;


const Button =styled.button`
color: white;
width: 325px;
height: 57px;
background: #122546;
border-radius: 16px;

`;
const Logo = styled.img`
dispaly: flex;
align-items: Center;
justify-content: center;
flex-direction: column;
width: 400px;
height: 300px;
margin: 15px;
`;

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
align-self: flex-end;
margin-top: 500px;
`;


// https://slack-files.com/T04QL6Z16-F02K2LVAMEY-591d0a04c4

