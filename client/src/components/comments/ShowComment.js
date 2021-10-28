
const ShowComment = ({ location }) => {

  const { id, item_id, subject, body, author, created_at} = location.state
  return (
    <>
      <h1>{subject}</h1>
      <p>{body}</p>
      <p>{author}</p>
    </>
  )
}

export default ShowComment