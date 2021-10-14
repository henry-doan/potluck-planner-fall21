const ShowEvent = ({ location }) => {

  const { id, title, event_date, event_time, details, created_at} = location.state
  return (
    <>  
      <h1>{title}</h1>
      <p>{event_date}</p>
      <p>{event_time}</p>
      <p>{details}</p>
      <p>{created_at}</p>
    </>
  )
}

export default ShowEvent;