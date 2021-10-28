import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Footer  = () => {
return(
  <>
    <CustomFooter>
      <div style= {{ textAlign: 'center', color: "white", fontSize: '8px'}}>
        <h4>DevPoint Labs Copyright @ 2021. All Rights Reserved.</h4>
        <Link to='/about'>Our Team</Link>
      </div>
    </CustomFooter>
  </> 
  )
}

export default Footer;

const CustomFooter = styled.div`
hieght: 2000px;
width: 100%;
background: #122546;
border: 1px solid #FFFFFF;
position: fixed;
bottom: 0;
`;