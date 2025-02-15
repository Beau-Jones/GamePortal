import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './WritePost.css';

function WritePost() {
  return (
    <Form className="write-post-form">
        <Card.Header className="card-header" as="h5">Write a Review</Card.Header>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form-label">Game Title</Form.Label>
        <Form.Control className="write-post-textbox" type="title" placeholder="What have you been playing?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form-label">What do you think about it?</Form.Label>
        <Form.Control className="write-post-textbox" as="textarea" rows={3} />
      </Form.Group>
      <Button>Add Post</Button>
    </Form>
  );
}

export default WritePost;