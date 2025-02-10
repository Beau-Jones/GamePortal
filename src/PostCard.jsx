import Card from 'react-bootstrap/Card';
import reviews from './data/reviews';

function PostCard({ friend, game, text }) {
  return (
    <Card bg='dark' border='primary'>
      <Card.Header as="h5">{friend}</Card.Header>
      <Card.Body>
        <Card.Title>{game}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}


export default PostCard;