import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 page not found</h1>
    <Link to='/'>
      Home
    </Link>
  </>
)

export default Nomatch;