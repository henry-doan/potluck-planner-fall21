import styled from 'styled-components';
import Login from '../auth/Login';
import Register from '../auth/Register';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import LogoSrc from '../images/Potluck Planner/Potluck Planner 1x/2.png';
import { Link } from 'react-router-dom';
const Home = () => (
  <>
  <Grid columns={3} divided stackable>
  <CustomElement>
  <ButtonWrapper>
  <Logo src={LogoSrc} />
  <Button>
  <Link to="/register">Sign up</Link>
  </Button>
    <br></br>
    <br></br>
    <br></br>
    <Button>
  <Link to="/login">Login </Link>
  </Button>
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
const Button = styled.button`
width: 700px;
height: 75px;
background: #122546;
border-radius: 16px;
font-size: 40px
`;
const Logosrc = styled.img`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
backgroun-image: url("2.png")
dispaly: flex;
align-items: Center;
justify-content: center;
flex-direction: column;
width: 900px;
height: 1000px;
`;
const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
align-self: flex-end;
margin-top: 300px;
`;


// https://slack-files.com/T04QL6Z16-F02K2LVAMEY-591d0a04c4

const Logo = styled.img`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
backgroun-image: url("2.png")
dispaly: flex;
align-items: left;
width: 900px;
height: 1000px;
`;
