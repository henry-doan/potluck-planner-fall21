import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user, history)
  }

  return(
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          placeholder="Email"
          required
        />
        <input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Password"
          required
        />
          <button primary type="submit">Login</button>
      </form>
      </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedLogin;