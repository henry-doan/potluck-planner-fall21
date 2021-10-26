import styled from 'styled-components';

const Home = () => (
  <>
  <CustomElement>
<h1 style={{fontSize: '19px', textAlign: 'center'}}>Potluck Planner</h1>
</CustomElement>
</>
)

export default Home;

const CustomElement = styled.div`
background-image: url("https://images.unsplash.com/photo-1463183547458-6a2c760d0912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80");
height: 2000px;
width: 2000px;
`;
