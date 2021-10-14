const ShowEvent = ({ location }) => {

  const { id, title, event_date, event_time, details, image} = location.state
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

export default ShowEvent;