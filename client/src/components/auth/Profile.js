import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Container, Grid, Button, Form, Image, GridColumn } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const Profile = ({ user, updateUser, history }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ first_name: '', last_name: '', email: '', file: '' })

  useEffect( () => {
    const { first_name, last_name, email, image } = user.user 
    setFormValue({ first_name, last_name, email, image })
  }, [])

  const onDrop = (files) => {
    setFormValue({ ...formVals, file: files[0] })
  }

  const profileView = () => {
    return (
      <>
        <Grid.Column width={4}>
          <Image src={ formVals.image || defaultImage } />
        </Grid.Column>
        <Grid.Column width={8}>
          <h1>{user.user.first_name} {user.user.last_name}</h1>
          <p>{user.user.email}</p>
        </Grid.Column>
      </>
    )
  }

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            name="first_name"
            value={formVals.first_name}
            onChange={(e, inputAttr) => setFormValue({...formVals, first_name: inputAttr.value})}
            label="First Name"
            required
          />
          <Form.Input
            name="last_name"
            value={formVals.last_name}
            onChange={(e, inputAttr) => setFormValue({...formVals, last_name: inputAttr.value})}
            label="Last Name"
            required
          />
          <Form.Input
            name="email"
            value={formVals.email}
            onChange={(e, inputAttr) => setFormValue({...formVals, email: inputAttr.value})}
            label="Email"
            required
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.user.id, formVals, history)
    setEditing(false)
    setFormValue({...formVals, file: ""})
  }

  return (
    <Container>
      <Grid>
        <Grid.Row>
          { editing ? editView() : profileView() }
          <Grid.Column>
            <Button onClick={() => setEditing(!editing)}>
              {editing ? 'Cancel' : 'Edit'}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;