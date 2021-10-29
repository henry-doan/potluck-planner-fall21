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
import Items from './components/items/Items';
import ShowItem from './components/items/ShowItem';
import Profile from './components/auth/Profile';
import About from './components/shared/About';
import Footer from './components/shared/Footer';
import Comments from './components/comments/Comments';
import ShowComment from './components/comments/ShowComment'
import FriendForm from './components/shared/FriendForm';

const App = () => (
  <>
    <FetchUser>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} /> 
        <ProtectedRoute exact path="/events" component={Events} />
        <ProtectedRoute exact path="/events/:id" component={ShowEvent} />
        <ProtectedRoute exact path="/items" component={Items} />
        <ProtectedRoute exact path="/items/:id" component={ShowItem} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/commments/:id" component={ShowComment} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/friendForm" component={FriendForm} />
        <Route component={Nomatch} />
      </Switch>
      <Footer/>
    </FetchUser>  
  </>
)


export default App;