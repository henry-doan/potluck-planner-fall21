const ShowItem = ({ location }) => {

  const { id, food_name, } = location.state
  return (
    <>  
      <h1>{food_name}</h1>
      
    </>
  )
}

export default ShowItem;