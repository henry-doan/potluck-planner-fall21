import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Header, Form, Segment } from 'semantic-ui-react'
const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user, history)
  }

  return(
    <Segment raised>
      <Header as='h2' textAlign='center'>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          placeholder="Email"
          required
        />
        <Form.Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Password"
          required
        />
        <Segment textAlign='center' basic>
          <Button style={{backgroundColor: "#122546", color: "white"}} type="submit">Login</Button>
        </Segment>
      </Form>
    </Segment>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedLogin;