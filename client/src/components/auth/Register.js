import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: "", first_name: "", last_name: "", password: "", passwordConfirmation: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
    } else {
      alert('Password does not match!')
    }
  }

  return(
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          placeholder="Email"
          required
        />
        <input
          name="first_name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}

          placeholder="First Name"
          required
        />
        <input
          name="last_name"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}

          placeholder="Last Name"
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
        <input
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          type="password"
          placeholder="Password Confirmation"
          required
        />
          <button type="submit">Register</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedRegister;