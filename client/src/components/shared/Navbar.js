import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const Navbar = ({ user, handleLogout, history, location }) => {
  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <CustomElement>
        <Menu pointing secondary>
          <Link to="/events">
            <Menu.Item
              id='events'
              name='events'
              active={location.pathname === '/events'}
            />
          </Link>
          <Link to="/items">
            <Menu.Item
              id='items'
              name='my items'
              active={location.pathname === '/items'}
              />
          </Link>
          <Link to="/invite">
            <Menu.Item
              id='invite'
              name='invite a buddy'
              active={location.pathname === '/invite'}
            />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={() => handleLogout(history)}
            />
            <Link to="/profile">
              <Menu.Item
                id='profile'
                name='profile'
                active={location.pathname === '/profile'}
              />
            </Link>
          </Menu.Menu>  
        </Menu>
        </CustomElement>
      )
    } else {
      // links if there is no user logged in 
      return(
        <CustomElement>
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
        </CustomElement>
      )
    }
  }
  return(
    <div>
      <CustomElement>
      <Menu pointing secondary>
        <Link to='/'>
        <CustomFont>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          /></CustomFont>
        </Link>
          { rightNavItems() }
      </Menu>
      
      </CustomElement>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)

const CustomElement = styled.div`
background-image: url("https://images.unsplash.com/photo-1463183547458-6a2c760d0912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80");

`;
const CustomFont = styled.div`
color: white;
`