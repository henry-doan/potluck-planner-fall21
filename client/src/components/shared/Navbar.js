import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history, location }) => {
  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <CustomElement>
        <Menu pointing secondary>
          <Link to="/events">
            <Text
              id='events'
              name='events'
              active={location.pathname === '/events'}
            />
          </Link>
          <Link to="/items">
            <Text
              id='items'
              name='my items'
              active={location.pathname === '/items'}
              />
          </Link>
          <Link to="/friendForm">
            <Text
              id='friendForm'
              name='invite a buddy'
              active={location.pathname === '/friendForm'}
            />
          </Link>
          <Menu.Menu position='right'>
            <Text
              name='logout'
              onClick={() => handleLogout(history)}
            />
            <Link to="/profile">
              <Text
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
            <Text
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Text
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
      <Grid columns={3} divided stackable>

      <Menu pointing secondary>
        <Link to='/'>
          <Text
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
          { rightNavItems() }
      </Menu>
      </Grid>
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
`

const Text = styled(Menu.Item)`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 20px;
color: white !important;
`
// import { Link, withRouter } from 'react-router-dom';
// import { AuthConsumer } from '../../providers/AuthProvider';
// import { Menu } from 'semantic-ui-react';
// import styled from 'styled-components';

// const Navbar = ({ user, handleLogout, history, location }) => {
//   const rightNavItems = () => {
//     if (user) {
//       // links if the user is logged in
//       return (
//         <CustomElement>
//         <Menu pointing secondary>
//           <Link to="/events">
//             <Menu.Item
//               id='events'
//               name='events'
//               active={location.pathname === '/events'}
//             />
//           </Link>
//           <Link to="/items">
//             <Text
//               id='items'
//               name='my items'
//               active={location.pathname === '/items'}
//               />
//           </Link>
//           <Link to="/invite">
//             <Text
//               id='invite'
//               name='invite a buddy'
//               active={location.pathname === '/invite'}
//             />
//           </Link>
//           <Menu.Menu position='right'>
//             <Text
//               name='logout'
//               onClick={() => handleLogout(history)}
//             />
//             <Link to="/profile">
//               <Menu.Item
//                 id='profile'
//                 name='profile'
//                 active={location.pathname === '/profile'}
//               />
//             </Link>
//           </Menu.Menu>  
//         </Menu>
//         </CustomElement>
        
//       )
//     } else {
//       // links if there is no user logged in 
//       return(
//         <CustomElement>
//         <Menu.Menu position='right'>
//           <Link to='/login'>
//             <Text
//               id='login'
//               name='login'
//               active={location.pathname === '/login'}
//             />
//           </Link>
//           <Link to='/register'>
//             <Text
//               id='register'
//               name='register'
//               active={location.pathname === '/register'}
//             />
//           </Link>
//         </Menu.Menu>
//         </CustomElement>
//       )
//     }
//   }
//   return(
//     <div>
//       <CustomElement>
//       <Logo a src="https://files.slack.com/files-pri/T04QL6Z16-F02K2LVAMEY/2.png#"></Logo>
//       <Menu pointing secondary>
//         <Link to='/'>
//           <Text
//             name='home'
//             id='home'
//             active={location.pathname === '/'}
//           />
//           </Link>
//           { rightNavItems() }
//         </Menu>
//         </CustomElement>
//     </div>
//   )
// }

// const ConnectedNavbar = (props) => (
//   <AuthConsumer>
//     { value => <Navbar {...value}  {...props}/>}
//   </AuthConsumer>
// )

// export default withRouter(ConnectedNavbar)

// const CustomElement = styled.div`
// background-image: url("https://images.unsplash.com/photo-1463183547458-6a2c760d0912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80");
// height: 200px;
// widtch: 200px;
// color: white;
// `
// const Text = styled(Menu.Item)`
// font-family: Rubik;
// font-style: normal;
// font-weight: 500;
// font-size: 10px;
// line-height: 12px;
// color: white !important;
// `

// const Logo = styled.img`
// positon: absolute;
// image: url()
// height: 54px;
// widtch: 62px:
// left: 0px;
// top: 0xp;
// align-item: left
// `