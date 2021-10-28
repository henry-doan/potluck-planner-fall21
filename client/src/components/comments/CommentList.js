import { AuthConsumer } from '../../providers/AuthProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CommentList = ({ comments }) => {

  // useEffect( () => {
  //   grabUserItems()
  // }, [])

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
  <AuthConsumer>
    { value => <CommentList {...value} {...props}/>}
  </AuthConsumer>
)

export default ConnectedCommentList;