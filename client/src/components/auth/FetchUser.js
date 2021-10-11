import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';

const FetchUser = ({ authenticated, setUser, children }) => {
  const [loaded, setLoaded] = useState(false)

  const load = () => setLoaded(true)

  useEffect( () => {
    if (authenticated) {
      load()
    } else {
      if (checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( res => {
            setUser(res.data.data)
            load()
          })
          .catch( res => {
            load()
          })
      } else {
        load()
      }
    }
  }, [])

  const checkLocalToken = () => {
    const token = localStorage.getItem('access-token')
    return token
  }

  return loaded ? children : null;
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { value => <FetchUser {...value} {...props}/>}
  </AuthConsumer>
)

export default ConnectedFetchUser;