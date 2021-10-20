import { AuthConsumer } from "../../providers/AuthProvider";
import { useEffect } from "react";

const ShowEvent = ({ location, grabFindItem, findItem, grabEventItems }) => {

  const { id, title, event_date, event_time, details, image } = location.state

  useEffect(() => {
    grabEventItems(id)
  }, [])

  return (
    <>  
      <div>{image}</div>
      <h1>{title}</h1>
      <p>{event_date}</p>
      <p>{event_time}</p>
      <p>{details}</p>

    </>
  )
}

const ConnectedFindItem = (props) => (
  <AuthConsumer>
    { value => <ShowEvent {...value} {...props}/>}
  </AuthConsumer>
)

export default ConnectedFindItem;