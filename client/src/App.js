import { Route, Switch } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Events from './components/events/Events';
import ShowEvent from './components/events/ShowEvent';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/events" component={Events} />
        <ProtectedRoute exact path="/events/:id" component={ShowEvent} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route component={Nomatch} />
      </Switch>
    </FetchUser>  
  </>
)


export default App;