import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history, location }) => {
  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <Menu pointing secondary>
          <Link to="/events">
            <Menu.Item
              id='events'
              name='events'
              active={location.pathname === '/events'}
            />
          </Link>
          <Link to="/myItems">
            <Menu.Item
              id='myItems'
              name='my items'
              active={location.pathname === '/myItems'}
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
      )
    } else {
      // links if there is no user logged in 
      return(
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
      )
    }
  }
  return(
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
          { rightNavItems() }
      </Menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)