import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({ itemId }) => (
  <>
    <h1>Comments</h1>
    <CommentForm itemId={itemId}/>
    <CommentList itemId={itemId}/>
  </>
)
export default Comments; 