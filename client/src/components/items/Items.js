import ItemForm from './ItemForm';
import ItemList from './ItemList';
import Footer from '../shared/Footer';
const Items = ({ eventId }) => (
  <>
    <h1>Items</h1>
    <ItemForm eventId={eventId}/>
    <ItemList eventId={eventId}/>
  </>
)

export default Items;