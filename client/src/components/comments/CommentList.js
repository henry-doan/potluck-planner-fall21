import { CommentConsumer } from '../../providers/CommentProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CommentList = ({ comments, grabComments }) => {

  useEffect( () => {
    grabComments()
  }, [])

  return(
    <>
      <List divided relaxed>
        {comments.map( c => 
          <Link to={{
            pathname: `/comments/${c.id}`,
            state: {
              ...c
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{c.subject}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedCommentList = (props) => (
  <CommentConsumer>
    { value => <CommentList {...value} {...props}/>}
  </CommentConsumer>
)

export default ConnectedCommentList;