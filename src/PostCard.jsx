import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
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

PostCard.propTypes = {
  friend: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PostCard;