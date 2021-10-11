import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout, history }) => {
  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <>
          <li onClick={() => handleLogout(history)}>
          Logout
          </li>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </>
      )
    } else {
      // links if there is no user logged in 
      return(
        <>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/myItems">
            <li>My Items</li>
          </Link>
          <Link to="/invite">
            <li>Invite a Buddy</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  return(
    <>
      <nav>
        <ul>
          {/* where you see links regardless of if you are login or not */}
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)