import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'


const FriendForm = () => (
  <Form success>
    <br></br>
    <h1>Invite a Friend</h1>
    <Message>
    <p>
      Share the joy of potluck planning with a fellow foodie. 
      Email a friend who is bringing an item, but hasn't signed up for Potluck Planner just yet.

    </p>
  </Message>
    <Form.Input label='Email' placeholder='bff@email.com' />
    {/* <Message
      success
      header='Form Completed'
      content="Your friend has been invited!"
    /> */}
    <Button>Submit</Button>
  </Form>
)

export default FriendForm;